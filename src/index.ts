import './lib/env' // 設定を.envからロード
import * as Discord from 'discord.js'
import { schedule } from 'node-cron';

// Create a new webhook
const hock_id = process.env.DISCORD_HOCK_ID as string;
const hock_token = process.env.DISCORD_HOCK_TOKEN as string;
const hook = new Discord.WebhookClient(hock_id, hock_token);

// Send a message using the webhook
schedule("0 15 * * *", () => {
  const today = new Date();
  if (!isWeekend(today)) {
    hook.send(
      "みんなアクティブ体操やろう！ https://www.youtube.com/watch?v=KPxt7vyQ6Zo"
    );
  }
});

const isWeekend = (today: Date) => {
  const dayNum = today.getDay(); //Date.getDay()は曜日番号として日曜始まりで0~6の値を返す

  if (dayNum == 0 || dayNum == 6) {
    return true;
  }

  return false;
}
