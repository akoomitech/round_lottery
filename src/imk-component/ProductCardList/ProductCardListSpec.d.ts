
import { ISpec } from '@imoka/imoka-mobweb-reactor';
import { ColorSet, ColorSetColor, ColorSetFill } from '@imoka/imoka-mobweb-tss';

export type ProductCardListSpecProperty = {
  
    
 /**
  * 平台 
  */
 platform: 'all' | 'jd' | 'tb' | 'tm'
  
    
 /**
  * 品类 
  */
 cat: 'all' | 'fitness' | 'snack' | 'makeup' | 'book'
  
    
 /**
  * 最大数量 
  */
 limit: 10 | 20
  
}

export type ProductCardListSpecAppearance = {
  
}

export type ProductCardListSpecTheme = {
  
    
 /**
  * 颜色 
  */
 colors: [ColorSetColor,ColorSetColor,ColorSetFill]

  
}

export type ProductCardListSpec = ISpec<ProductCardListSpecProperty, ProductCardListSpecAppearance, ProductCardListSpecTheme>;
