/**
 * 生成随机数字
 * @param {number} min 最小值（包含）
 * @param {number} max 最大值（不包含）
 */
const MMSLS = linksEnv ? linksEnv.split(',') : [];
function randomNumber(min = 0, max = 100) {
    return Math.min(Math.floor(min + Math.random() * (max - min)), max);
}

// 从环境变量中获取链接
const linksEnv = process.env.MAIMEMO_LINKS;


const MMSL_random = MMSLS[randomNumber(0, MMSLS.length)];

module.exports = {
    MMSL_random
};
   
