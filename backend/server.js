const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const path = require('path');
require('dotenv').config();

const authRoutes = require('./routes/authRoutes');
const userRoutes = require('./routes/userRoutes');
const dataRoutes = require('./routes/dataRoutes');
const myRouter = require('./routes/myrouter');

const app = express();
app.use(express.json());
app.use(cors());

// MongoDB 接続
const uri = process.env.MONGO_URI || 'mongodb://localhost:27017/fureai';
mongoose.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log('MongoDB connected'))
    .catch(err => console.error('MongoDB connection error:', err));

// ルーティング
app.use('/', myRouter);
app.use('/api/auth', authRoutes);
app.use('/api/users', userRoutes);
app.use('/api/data', dataRoutes);

// フロントエンド（ユーザー向けサイト）を提供
app.use(express.static(path.join(__dirname, '../frontend/build')));
app.get('/', (req, res) => {
    try {
        res.sendFile(path.join(__dirname, '../frontend/build', 'index.html'));
        console.log("✅ Frontend is served successfully.");
    }catch (error) {
        console.log("❌ Error serving frontend:", error);
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
// ブログ記事を提供
app.use('/news-list', express.static(path.join(__dirname, '../article-hive-portal/dist')));
app.get('/news-list/*', (req, res) => {
    try {
        res.sendFile(path.join(__dirname, '../article-hive-portal/dist', 'index.html'));
        console.log("✅ Blog is served successfully.");
    }catch(error) {
        console.log( "❌ Error serving blog:", error);
        res.status(500).send("Internal Server Error");
    }
});

// サーバー起動
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
