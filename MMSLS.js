const MMSLS = [
    

    "https://www.maimemo.com/share/page?uid=16433672&pid=3fb1f6eb08c01b21648f9f75ca2ab92f&tid=43np89fafdfcd8fde80548d4b8e1ab7214",     //yhc
    
  ]
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
  }
