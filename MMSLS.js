// 从环境变量获取分享链接字符串
const linksStr = process.env.MAIMEMO_LINKS;
// 将字符串按逗号分隔成数组
const MMSLS = linksStr? linksStr.split(',') : [];
console.log("MMSLS的值是："+MMSLS);
/**
 * 生成随机数字
 * @param {number} min 最小值（包含）
 * @param {number} max 最大值（不包含）
 */
function randomNumber(min = 0, max = 100) {
    return Math.min(Math.floor(min + Math.random() * (max - min)), max);
}

const MMSL_random = MMSLS[randomNumber(0, MMSLS.length)];
console.log("MMSL_random的值是："+MMSL_random);

module.exports = {
    MMSL_random
};
