# プロジェクトのルートディレクトリを作成
New-Item -ItemType Directory -Path "project-root"

# Backend フォルダとファイル作成
New-Item -ItemType Directory -Path "project-root\backend\controllers"
New-Item -ItemType Directory -Path "project-root\backend\models"
New-Item -ItemType Directory -Path "project-root\backend\routes"
New-Item -ItemType Directory -Path "project-root\backend\middleware"
New-Item -ItemType Directory -Path "project-root\backend\config"

New-Item -ItemType File -Path "project-root\backend\server.js"
New-Item -ItemType File -Path "project-root\backend\config\db.js"
New-Item -ItemType File -Path "project-root\backend\config\config.js"
New-Item -ItemType File -Path "project-root\backend\controllers\authController.js"
New-Item -ItemType File -Path "project-root\backend\controllers\userController.js"
New-Item -ItemType File -Path "project-root\backend\controllers\dataController.js"
New-Item -ItemType File -Path "project-root\backend\models\User.js"
New-Item -ItemType File -Path "project-root\backend\models\Data.js"
New-Item -ItemType File -Path "project-root\backend\routes\authRoutes.js"
New-Item -ItemType File -Path "project-root\backend\routes\userRoutes.js"
New-Item -ItemType File -Path "project-root\backend\routes\dataRoutes.js"
New-Item -ItemType File -Path "project-root\backend\middleware\authMiddleware.js"
New-Item -ItemType File -Path "project-root\backend\middleware\errorHandler.js"

# Frontend フォルダとファイル作成
New-Item -ItemType Directory -Path "project-root\frontend\public"
New-Item -ItemType Directory -Path "project-root\frontend\src\components"
New-Item -ItemType Directory -Path "project-root\frontend\src\pages"
New-Item -ItemType Directory -Path "project-root\frontend\src\context"
New-Item -ItemType Directory -Path "project-root\frontend\src\services"

New-Item -ItemType File -Path "project-root\frontend\src\App.js"
New-Item -ItemType File -Path "project-root\frontend\src\index.js"

# Dashboard フォルダとファイル作成
New-Item -ItemType Directory -Path "project-root\dashboard\src\components"
New-Item -ItemType Directory -Path "project-root\dashboard\src\pages"
New-Item -ItemType Directory -Path "project-root\dashboard\src\hooks"
New-Item -ItemType Directory -Path "project-root\dashboard\src\services"

New-Item -ItemType File -Path "project-root\dashboard\src\App.js"
New-Item -ItemType File -Path "project-root\dashboard\src\index.js"

# 環境変数や設定ファイルを作成
New-Item -ItemType File -Path "project-root\.env"
New-Item -ItemType File -Path "project-root\package.json"
New-Item -ItemType File -Path "project-root\README.md"
