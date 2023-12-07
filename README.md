# WRTC - Video Chat


基于 WebRTC 的视频聊天平台，使用自建的 STUN / TURN 服务器。

## 特性

- 直接的对等连接,确保最低的延迟
- 无需下载，完全基于浏览器
- 屏幕共享
- 画中画
- 文字聊天
- 背景替换
- 录制
- 截图
- 支持自建的 STUN /TURN 服务器
- 支持使用密码加入通话，确保安全
- 可安装的(PWA)
- 白板

#### 安装依赖

```
npm i
```

#### 启动服务器

```
npm start
```

- 在浏览器中打开 `localhost:3000`
- 如果要在另一台计算机/网络上使用客户端，请确保在 HTTPS 连接上发布服务。

## 注意

你需要在 index.js 中使用你自己的 STUN/TURN 服务器信息

## 贡献

欢迎 PR

## STUN /TURN

也许你需要 [coturn](https://github.com/coturn/coturn)

