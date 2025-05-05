// 从环境变量获取分享链接字符串
//const linksStr = process.env.MAIMEMO_LINKS;
// 将字符串按逗号分隔成数组
const MMSLS =["https://www.maimemo.com/share/page?uid=16433672&pid=53d61e6549518192220b815fdbec5652&tid=46ecf2e2f79c3240e2a4d4950f8c898b"];
//console.log(MMSLS);

/**
 * 生成随机数字
 * @param {number} min 最小值（包含）
 * @param {number} max 最大值（不包含）
 */
function randomNumber(min = 0, max = 100) {
    return Math.min(Math.floor(min + Math.random() * (max - min)), max);
}

const MMSL_random = MMSLS[randomNumber(0, MMSLS.length)];

module.exports = {
    MMSL_random
};
