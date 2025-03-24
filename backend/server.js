const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const path = require('path');
require('dotenv').config();

const authRoutes = require('./routes/authRoutes');
const userRoutes = require('./routes/userRoutes');
const dataRoutes = require('./routes/dataRoutes');
// const myRouter = require('./routes/myrouter');

const app = express();
app.use(express.json());
app.use(cors());

// MongoDB 接続
const uri = process.env.MONGO_URI || 'mongodb://localhost:27017/fureai';
mongoose.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log('MongoDB connected'))
    .catch(err => console.error('MongoDB connection error:', err));

// ルーティング
// app.use('/', myRouter);
// app.use('/api/auth', authRoutes);
// app.use('/api/users', userRoutes);
// app.use('/api/data', dataRoutes);
// ブログ記事を提供
app.use('/blog', express.static(path.join(__dirname, '../article-hive-portal/dist')));
app.get('/blog/*', (req, res) => {
    try {
        res.sendFile(path.join(__dirname, '../article-hive-portal/dist', 'index.html'));
        console.log("✅ Blog is served successfully.");
    }catch(error) {
        console.log( "❌ Error serving blog:", error);
        res.status(500).send("Internal Server Error");
    }
});

// try {
//     res.sendFile(path.join(dashboardPath, 'index.html'));
//     console.log("✅ Dashboard is served successfully.");
// } catch (error) {
//     console.error("❌ Error serving dashboard:", error);
//     res.status(500).send("Internal Server Error");
// }
// ダッシュボード（管理画面）を提供
app.use('/admin', express.static(path.join(__dirname, '../dashboard/build')));
app.get('/admin/*', (req, res) => {
    try {
        res.sendFile(path.join(__dirname, '../dashboard/build', 'index.html'));
        console.log("✅ Dashboard is served successfully.");
    }catch(error) {
        console.log("❌ Error serving dashboard:", error);
        res.status(500).send("Internal Server Error");
    }
});

app.post('/send-mail', async (req, res) => {
    const { name, email, subject, message, isSubmitting } = req.body;
    // Nodemailerの設定
    const transporter = nodemailer.createTransport({
        service: 'gmail', // Gmailを使用（他のSMTPサーバーも可）
        auth: {
            user: process.env.EMAIL_USER,
            pass: process.env.EMAIL_PASS 
        }
    });

    if (!name || !email || !content) {
        return res.status(400).json({ error: 'お名前、メールアドレス、お問い合わせ内容は必須です。' });
    }
    // メールの内容
    const mailOptions = {
        from:  "${name}", // フォームの送信者
        to: `${process.env.EMAIL_USER}`, // 自分のメールアドレス
        subject: `お問い合わせ: ${subject}`,
        text: `お問い合わせ項目: ${subject}\n\nお名前: ${name}\nメールアドレス: ${email}\n電話番号: ${isSubmitting}\n\nお問い合わせ内容:\n${message}`
    };

    try {
        await transporter.sendMail(mailOptions);
        res.status(200).json({ message: 'メールが送信されました！' });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'メール送信に失敗しました。' });
    }
});
// フロントエンド（ユーザー向けサイト）を提供
app.use(express.static(path.join(__dirname, '../frontend-animal/dist')));
app.get('/*', (req, res) => {
    try {
        res.sendFile(path.join(__dirname, '../frontend-animal/dist', 'index.html'));
        console.log("✅ Frontend is served successfully.");
    }catch (error) {
        console.log("❌ Error serving frontend:", error);
        res.status(500).send("Internal Server Error");
    }
});

// サーバー起動
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
