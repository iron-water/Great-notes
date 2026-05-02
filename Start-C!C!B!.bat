@echo off
:: 切换终端编码为 UTF-8，防止中文显示乱码
chcp 65001 >nul
title 知识库 AI 管理器

echo ==========================================
echo      启动 AI 知识库助理 (Claude Code CCB)
echo ==========================================
echo.

:: 1. 先拉取云端，防止你在小书匠网页端改了东西导致本地冲突
echo [1/4] 正在拉取 GitHub 云端最新变动...
git pull origin main

echo.
echo [2/4] 正在启动 Claude Code CCB...
echo ------------------------------------------
echo 【提示】完成笔记修改后，输入 /exit 退出，将自动触发同步
echo ------------------------------------------

:: 2. 启动 Claude。必须用 call，这样退出 Claude 后脚本才会继续运行
call ccb

echo.
echo ------------------------------------------
echo [3/4] AI 助理已退出，正在检查文件变动...

:: 3. 暂存所有修改，并静默检查是否有内容变动
git add .
git diff --cached --quiet

:: 4. 判断变动状态并执行同步
:: 如果有变动，git diff --cached --quiet 的返回码(errorlevel)会是 1
if %ERRORLEVEL% EQU 1 (
    echo.
    echo 发现笔记有修改！正在打包...
    
    :: 提交修改，使用当前日期和时间作为 commit 备注
    git commit -m "AI Auto-sync: %date% %time%"
    
    echo.
    echo [4/4] 正在推送到 GitHub...
    git push origin main
    
    echo.
    echo [成功] 所有改动已安全同步到云端！
) else (
    echo.
    echo [4/4] 笔记没有任何修改，无需同步。
)

echo.
echo ==========================================
:: 暂停脚本，这样运行结束后黑框不会立马消失，你可以看一眼同步结果
pause