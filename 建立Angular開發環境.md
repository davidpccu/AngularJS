# 建立Angular開發環境

### [ 作業系統 ]

- Windows 7 以上版本 (更新到最新 Service Pack 版本)
- Mac OS X 10.6 以上版本

### [ 套件管理器 ( Mac OS X Only ) ]

- [Homebrew — The missing package manager for OS X](http://brew.sh/)
  - 安裝過程會要求你安裝一份沒有 IDE 的 Xcode 應用程式
  - 需要有 bash 或 zsh 的 Shell 環境
  - 相關連結
    - 套件搜尋網站: [Search Brew](http://searchbrew.com/)
    - [Installing Homebrew without XCode @ ryanwinchester](https://ryanwinchester.ca/posts/installing-homebrew-without-xcode)

### [ 套件管理器 ( Windows ) ]

- [Chocolatey - The package manager for Windows](https://chocolatey.org/)
  - Install with cmd.exe
    ``` bash
        @"%SystemRoot%\System32\WindowsPowerShell\v1.0\powershell.exe" -NoProfile -InputFormat None -ExecutionPolicy Bypass -Command "iex ((New-Object System.Net.WebClient).DownloadString('https://chocolatey.org/install.ps1'))" && SET "PATH=%PATH%;%ALLUSERSPROFILE%\chocolatey\bin"
    ```
  - Install with PowerShell.exe
     ``` bash
        Set-ExecutionPolicy Bypass -Scope Process -Force; iex ((New-Object System.Net.WebClient).DownloadString('https://chocolatey.org/install.ps1'))
    ```

### [ 瀏覽器 ]

- [Google Chrome](http://www.google.com/intl/zh-TW/chrome/)
  - 安裝 [Augury](https://chrome.google.com/webstore/detail/augury/elgalmkoelokbchhkhacckoklkejnhcd) 擴充套件 ( [官網](https://augury.angular.io/) )

### [ 安裝 Git 工具 ]

- Windows
  - [Git](https://www.git-scm.com/download/win)
  - [TortoiseGit](https://tortoisegit.org/)
- Mac
  - [Git](https://www.git-scm.com/download/mac)
  - [SourceTree](https://www.sourcetreeapp.com/)
  - 若使用 Brew 的話，可以用 `brew install git` 指令安裝

#### 首次使用 Git 必須做的設定 (必要設定)

- 請開啟命令提示字元或終端機視窗，並輸入以下指令進行設定，這是使用 Git 之前的必要步驟：
  - 設定您的名稱: `git config --global user.name 您的名稱`
  - 設定電子郵件: `git config --global user.email 您的電子郵件`

### [ 開發工具 ]

- [Visual Studio Code](https://code.visualstudio.com) (請安裝或更新至最新版)
  - Angular 擴充套件包
    - 安裝 [Angular Extension Pack](https://marketplace.visualstudio.com/items?itemName=doggy8088.angular-extension-pack) 擴充套件
    - 安裝 [Prettier - Code formatter](https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode) 擴充套件
  - 其他可以考慮安裝 (但我沒有裝) 的擴充套件
    - 安裝 [Angular Component Extension](https://marketplace.visualstudio.com/items?itemName=onixie.angular-component-extension) 擴充套件
    - 安裝 [Angular 2 TypeScript Emmet](https://marketplace.visualstudio.com/items?itemName=jakethashi.vscode-angular2-emmet) 擴充套件
    - 安裝 [HTML SCSS Support](https://marketplace.visualstudio.com/items?itemName=P-de-Jong.vscode-html-scss) 擴充套件

### [ 安裝 Node.js 工具 ]

- 建議安裝 [Node.js](https://nodejs.org/) **v8.9** 以上版本
  - 如果是 Mac 用戶，若使用 Brew 的話，可以用 `brew install node` 指令安裝
- 驗證安裝結果的指令
  - `node -v`
    - 確認為 `v8.9.0` 以上版本
  - `npm -v`
    - 確認為 `v5.5.1` 以上版本

### [ 安裝 [Angular CLI](https://cli.angular.io/) 工具 ]

- 開啟「命令提示字元」視窗 (Windows) 或 Terminal 應用程式 (Mac OS X)，並執行以下指令安裝 npm 套件 (這個動作會執行 5 ~ 10 分鐘)：

    ```
    npm install -g @angular/cli
    ```

- 驗證安裝結果的指令

  - `ng -v`
    - 確認 `6.0.7` 以上版本

### [ 驗證 [Angular CLI](https://cli.angular.io/) 執行 ]

- 請依據下列步驟測試 [Angular CLI](https://cli.angular.io/) 是否可以正常執行：
    - 開啟「命令提示字元」視窗 (Windows) 或 Terminal 應用程式 (Mac OS X)
    - 建立 demo1 專案資料夾與 Angular 專案骨架，請執行下列指令：
        - `ng new demo1`
        - 這個過程會建立 Angular 專案檔案並自動安裝所有 npm 相依套件！
    - 進入 demo1 目錄
        - `cd demo1`
    - 啟動 Angular 開發伺服器
        - `npm start`
- 開啟 Google Chrome 瀏覽器，並連接到以下網址，畫面上只要出現 `Welcome to app!` 字樣，就代表設定成功！👍
    - [http://localhost:4200/](http://localhost:4200/)

## 常見問題解答

1. 使用 npm 安裝套件時都會出現「**指定的路徑、檔名，或是兩者都太長。完整的檔名必須少於 260 個字元，並且目錄名稱必須少於 248 個字元**」錯誤訊息怎麼辦？

    - 請參見 [如何在 Windows 平台變更 Node.js / npm 全域模組的預設安裝路徑](http://blog.miniasp.com/post/2015/09/02/Change-npm-default-global-installation-directory-for-nodejs-modules-in-Windows.aspx) 文章。

2. 請問我公司因為需要設定代理伺服器 (Proxy Server) 才能上網，請問要做那些設定才好呢？

    - 請參見 [如何在強制使用代理伺服器的環境下設定 git, npm, bower, gem, ionic 工具](http://blog.miniasp.com/post/2015/09/03/proxy-settings-for-git-npm-bower-gem-ionic.aspx) 文章。

3. 請問我的 `tsc -v` 所回傳的版本一直都是舊版，執行 `npm install -g typescript` 也執行好幾次了，為什麼會這樣呢？

    - 請參見 [如何解決在 Windows 用 npm 安裝 TypeScript 之後 tsc 還是舊版的問題](http://blog.miniasp.com/post/2016/07/05/TypeScript-tsc-path-problem-on-Windows.aspx) 文章。

4. 若是用 Mac OS X 電腦，覺得每次安裝 global npm 模組都要打 sudo 很麻煩的話，可以建議用以下命令重裝 node 與 npm<br>
  參考文章：[How to use npm global without sudo on OSX](http://www.johnpapa.net/how-to-use-npm-global-without-sudo-on-osx/)

    ```
    brew install node --without-npm
    mkdir "${HOME}/.npm-packages"
    echo NPM_PACKAGES="${HOME}/.npm-packages" >> ${HOME}/.bashrc
    echo prefix=${HOME}/.npm-packages >> ${HOME}/.npmrc
    curl -L https://www.npmjs.org/install.sh | sh
    echo NODE_PATH=\"\$NPM_PACKAGES/lib/node_modules:\$NODE_PATH\" >> ${HOME}/.bashrc
    echo PATH=\"\$NPM_PACKAGES/bin:\$PATH\" >> ${HOME}/.bashrc
    echo source "~/.bashrc" >> ${HOME}/.bash_profile
    source ~/.bashrc
    ```

    - [Fixing npm permissions | npm Documentation](https://docs.npmjs.com/getting-started/fixing-npm-permissions#fixing-npm-permissions)

[來源](https://gist.github.com/doggy8088/15e434b43992cf25a78700438743774a)

