
import { ISpec } from '@imoka/imoka-mobweb-reactor';
import { String } from '@imoka/imoka-mobweb-tss';

export type RunLotterySpecProperty = {
  
     /**
  * 抽奖ID 
  */
 id: String
  
}

export type RunLotterySpecAppearance = {
  
}

export type RunLotterySpecTheme = {
  
}

export type RunLotterySpec = ISpec<RunLotterySpecProperty, RunLotterySpecAppearance, RunLotterySpecTheme>;
