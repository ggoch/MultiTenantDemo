require("fs")
  .readFileSync(".env", "utf-8")
  .split("\n")
  .forEach((line) => {
    const [key, value] = line.split("=");
    if (key && value) process.env[key.trim()] = value.trim();
  });

module.exports = {
  apps: [
    {
      name: "api",
      script: "dotnet",
      args: "Further.Abp.dll",
      cwd: "./abp/aspnet-core/Further.Abp/bin/Release/net9.0/publish", // 設定 Next.js 專案的工作目錄
      env: {
        ASPNETCORE_URLS: "https://localhost:44366",
      },
    },
    {
      name: "admin",
      script: "npm",
      args: "run start",
      //使用nvm後需指定正確路徑否則無法啟動
      //https://github.com/Unitech/pm2/issues/5571
      // script: "node",
      // args: `${process.env.NVM_PATH}\\node_modules\\npm\\bin\\npm-cli.js run start`,
      cwd: "./abp/angular", // 設定 Next.js 專案的工作目錄
    },
    {
      name: "nextjs",
      // script: "npm",
      // args: "run dev",
      //使用nvm後需指定正確路徑否則無法啟動
      //https://github.com/Unitech/pm2/issues/5571
      // script: "node",
      // args: `${process.env.NVM_PATH}\\node_modules\\npm\\bin\\npm-cli.js run dev`,
      cwd: "./nextjs", // 設定 Next.js 專案的工作目錄
      env: {
        //   NODE_ENV: "production", // 設定環境變數
        // PORT: 3000
      },
    },
    {
      name: "strapi",
      script: "npm",
      args: "run develop",
      //使用nvm後需指定正確路徑否則無法啟動
      //https://github.com/Unitech/pm2/issues/5571
      // script: "node",
      // args: `${process.env.NVM_PATH}\\node_modules\\npm\\bin\\npm-cli.js run develop`,
      cwd: "./strapi", // 設定 Strapi 專案的工作目錄
      env: {
        // NODE_ENV: "development", // 或 "production" 根據需要設置
        // PORT: 1337
      },
    },
  ],
};
