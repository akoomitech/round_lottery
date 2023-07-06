import React from 'react';
import { ComponentBody, ImokaCtx, stylus } from '@imoka/imoka-mobweb-reactor';
import { GlobalSpec } from '@/types/GlobalSpec';
import api from '../../api';
import { ProductCardListSpec } from './ProductCardListSpec';
import { LazyImg, SvgIcon } from '@imoka/imoka-mobweb-reactor-support';
import { ElementType } from '@imoka/imoka-mobweb-tss';
import './ProductCardList.less';

export type Props = {
  Imoka: ImokaCtx<ProductCardListSpec, GlobalSpec>,
}

type ProductMasonryStreamCardProps = Pick<ProductCardListSpec, 'theme' | 'appearance'> & {
  item: any
}

const ProductCard = ({
  item, 
  theme: { 
    colors: [textColor, priceColor, bgColor], 
  },
  appearance: {
  }
}: ProductMasonryStreamCardProps) => {

  const handleClick = () => {
    window.location.href = item.link;
  }

  return (
    <div styleName="product-card" onClick={handleClick}>
      <div styleName="product-card-inner" style={{ ...stylus({ fill: bgColor.fill })} }>
        <div styleName="snapshot" >
          <LazyImg img={{ src: item.pic, width: 0, height: 0}} />
        </div>
        <div className="intro">
          <div styleName="top">
            <div styleName="title" style={{ color: textColor.color}}>
              <span>{item.name}</span>
            </div>
          </div>
          <div styleName="bottom">
            <div styleName="price-show">
              <div styleName="price-box" style={{ color: priceColor.color }}>
              <span styleName="price-sign">¥</span>
                <span styleName="price">{item.price}</span>
              </div>
            </div>

          </div>
        </div>
      </div>
    </div>
  )
}

export default ({ Imoka: { spec: { property, theme, appearance }, metaInfo, bodyProps }}: Props) => {
  const [products, setProducts] = React.useState([]);

  React.useEffect(() => {
    api.getProducts({ platform: property.platform === 'all' ? '': property.platform, cat: property.cat === 'all' ? '': property.cat})
      .then((resp:any) => {
        setProducts(resp);
      })
      .catch(console.log);
  }, [property.platform, property.cat])

  return (
    <ComponentBody metaInfo={metaInfo} styleName="product-card-list" {...bodyProps}>
      {
        Array.from(Array(2).keys()).map(colNum => (
          <div styleName={`column column-2`}>
            {
              products.filter((_, idx) => idx % 2 === colNum).map(item => <ProductCard item={item} theme={theme} appearance={appearance}/>)
            }
          </div>
        ))
      }
    </ComponentBody>
  )
};