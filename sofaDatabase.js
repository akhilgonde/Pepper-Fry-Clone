const Database=()=>
{
    let sofaAndRecliners=[
        {
            name: "Bentley 1 Seater Sofa in Brown Colour",
            subtype: "1SeaterSofa",
            image1: "https://ii1.pepperfry.com/media/catalog/product/b/e/800x880/bentley-single-seater-sofa-bentley-single-seater-sofa-bntb9n.jpg",
            image2: "https://ii1.pepperfry.com/media/catalog/product/b/e/800x880/bentley-single-seater-sofa-bentley-single-seater-sofa-4gfaxk.jpg",
            image3: "https://ii1.pepperfry.com/media/catalog/product/b/e/800x880/bentley-single-seater-sofa-bentley-single-seater-sofa-nwbwd0.jpg",
            image4: "https://ii1.pepperfry.com/media/catalog/product/b/e/800x880/bentley-single-seater-sofa-bentley-single-seater-sofa-8zscrq.jpg",
            price:  "1,69,848",
            brand: "Bselle",
            discount: "89,170",
            discount_price:"80,678",
        },
    
        {
            name: "Elias 1 Seater Half Leather Sofa in Brown Colour",
            subtype: "1SeaterSofa",
            image1: "https://ii1.pepperfry.com/media/catalog/product/e/l/494x544/elias-1-seater-half-leather-sofa-in-brown-colour-by-casacraft-elias-1-seater-half-leather-sofa-in-br-xe6bzs.jpg",
            image2: "https://ii1.pepperfry.com/media/catalog/product/e/l/800x880/elias-half-leather-one-seater-sofa-in-brown-colour-by-casacraft-elias-half-leather-one-seater-sofa-i-hjvl8o.jpg",
            image3: "https://ii1.pepperfry.com/media/catalog/product/e/l/800x880/elias-half-leather-one-seater-sofa-in-brown-colour-by-casacraft-elias-half-leather-one-seater-sofa-i-cysiye.jpg",
            image4: "https://ii1.pepperfry.com/media/catalog/product/e/l/800x880/elias-half-leather-one-seater-sofa-in-brown-colour-by-casacraft-elias-half-leather-one-seater-sofa-i-ettwcc.jpg",
            price:  "1,16,999",
            brand: "CasaCraft",
            discount: "45,000",
            discount_price:"71,999",
        },
    
    
        {
            name: "Daisuke 1 Seater Sofa in Grey Colour",
            subtype: "1SeaterSofa",
            image1: "https://ii1.pepperfry.com/media/catalog/product/d/a/494x544/daisuke-1-seater-sofa-in-grey-colour-by-mintwud-daisuke-1-seater-sofa-in-grey-colour-by-mintwud-hs7xel.jpg",
            image2: "https://ii1.pepperfry.com/media/catalog/product/d/a/800x880/daisuke-1-seater-sofa-in-brown-colour-by-mintwud-daisuke-1-seater-sofa-in-brown-colour-by-mintwud-xviq9d.jpg",
            image3: "https://ii1.pepperfry.com/media/catalog/product/d/a/800x880/daisuke-1-seater-sofa-in-brown-colour-by-mintwud-daisuke-1-seater-sofa-in-brown-colour-by-mintwud-izorhx.jpg",
            image4: "https://ii1.pepperfry.com/media/catalog/product/d/a/800x880/daisuke-1-seater-sofa-in-brown-colour-by-mintwud-daisuke-1-seater-sofa-in-brown-colour-by-mintwud-3pzoh1.jpg",
            price:  "30,999",
            brand: "Mintwud",
            discount: "21,000",
            discount_price:"9,999",
        },
    
        {
            name: "Avilys Solid Wood 1 Seater Sofa In Honey Oak Finish",
            subtype: "1SeaterSofa",
            image1: "https://ii3.pepperfry.com/media/catalog/product/a/v/494x544/avilys-solid-wood-1-seater-sofa-in-honey-oak-finish-by-woodsworth-avilys-solid-wood-1-seater-sofa-in-pnps4w.jpg",
            image2: "https://ii1.pepperfry.com/media/catalog/product/a/v/800x880/avilys-solid-wood-1-seater-sofa-in-honey-oak-finish-by-woodsworth-avilys-solid-wood-1-seater-sofa-in-s27cxv.jpg",
            image3: "https://ii1.pepperfry.com/media/catalog/product/a/v/800x880/avilys-solid-wood-1-seater-sofa-in-honey-oak-finish-by-woodsworth-avilys-solid-wood-1-seater-sofa-in-ov6usf.jpg",
            image4: "https://ii1.pepperfry.com/media/catalog/product/a/v/800x880/avilys-solid-wood-1-seater-sofa-in-honey-oak-finish-by-woodsworth-avilys-solid-wood-1-seater-sofa-in-5mv6lh.jpg",
            price:  "39,999",
            brand: "Woodsworth",
            discount: "17,250",
            discount_price:"22,749",
        },
    
        {
            name: "Blos 1 Seater Sofa in Brown Colour",
            subtype: "1SeaterSofa",
            image1: "https://ii1.pepperfry.com/media/catalog/product/b/l/800x880/blos-1-seater-sofa-in-brown-colour-by-durian-blos-1-seater-sofa-in-brown-colour-by-durian-5wce8b.jpg",
            image2: "https://ii1.pepperfry.com/media/catalog/product/b/l/800x880/blos-1-seater-sofa-in-brown-colour-by-durian-blos-1-seater-sofa-in-brown-colour-by-durian-nym1pe.jpg",
            image3: "https://ii1.pepperfry.com/media/catalog/product/b/l/800x880/blos-1-seater-sofa-in-brown-colour-by-durain-blos-1-seater-sofa-in-brown-colour-by-durain-ulvi06.jpg",
            image4: "https://ii1.pepperfry.com/media/catalog/product/b/l/800x880/blos-1-seater-sofa-in-brown-colour-by-durain-blos-1-seater-sofa-in-brown-colour-by-durain-zgo31p.jpg",
            price:  "4,400",
            brand: "Durian",
            discount: "22,200",
            discount_price:"22,200",
        },
    
        {
            name: "Zakariah 1 Seater Sofa in Matte Black Finish",
            subtype: "1SeaterSofa",
            image1: "https://ii1.pepperfry.com/media/catalog/product/z/a/800x880/zakariah-1-seater-sofa-in-matte-black-finish---mintwud-by-pepperfry-zakariah-1-seater-sofa-in-matte--jh99ss.jpg",
            image2: "https://ii1.pepperfry.com/media/catalog/product/z/a/800x880/zakariah-1-seater-sofa-in-matte-black-finish---mintwud-by-pepperfry-zakariah-1-seater-sofa-in-matte--muqunn.jpg",
            image3: "https://ii1.pepperfry.com/media/catalog/product/z/a/800x880/zakariah-1-seater-sofa-in-matte-black-finish---mintwud-by-pepperfry-zakariah-1-seater-sofa-in-matte--kqhosx.jpg",
            image4: "https://ii1.pepperfry.com/media/catalog/product/z/a/800x880/zakariah-1-seater-sofa-in-matte-black-finish---mintwud-by-pepperfry-zakariah-1-seater-sofa-in-matte--ziyuxe.jpg",
            price:  "37,499",
            brand: "Mintwud",
            discount: "22,500",
            discount_price:"14,999",
        },
    
    
        {
            name: "Cristobal 1 Seater Half Leather Sofa in Black Colour",
            subtype: "1SeaterSofa",
            image1: "https://ii1.pepperfry.com/media/catalog/product/c/r/800x880/cristobal-1-seater-half-leather-sofa-in-black-colour-by-casacraft-cristobal-1-seater-half-leather-so-liivut.jpg",
            image2: "https://ii1.pepperfry.com/media/catalog/product/c/r/800x880/cristobal-half-leather-one-seater-sofa-in-black-colour-by-casacraft-cristobal-half-leather-one-seate-1cqj2f.jpg",
            image3: "https://ii1.pepperfry.com/media/catalog/product/c/r/800x880/cristobal-half-leather-one-seater-sofa-in-black-colour-by-casacraft-cristobal-half-leather-one-seate-lvydch.jpg",
            image4: "https://ii1.pepperfry.com/media/catalog/product/c/r/800x880/cristobal-half-leather-one-seater-sofa-in-black-colour-by-casacraft-cristobal-half-leather-one-seate-7gvs2f.jpg",
            price:  "73,999",
            brand: "CasaCraft",
            discount: "31,750",
            discount_price:"42,249",
        },
    
    
        {
            name: "Amida 1 Seater Sofa in Beige Colour",
            subtype: "1SeaterSofa",
            image1: "https://ii1.pepperfry.com/media/catalog/product/a/m/800x880/amida-1-seater-sofa-in-beige-colour---mintwud-by-pepperfry-amida-1-seater-sofa-in-beige-colour---min-xfrrdn.jpg",
            image2: "https://ii1.pepperfry.com/media/catalog/product/a/m/800x880/amida-1-seater-sofa-in-beige-colour---mintwud-by-pepperfry-amida-1-seater-sofa-in-beige-colour---min-rfq9pn.jpg",
            image3: "https://ii1.pepperfry.com/media/catalog/product/a/m/800x880/amida-1-seater-sofa-in-beige-colour---mintwud-by-pepperfry-amida-1-seater-sofa-in-beige-colour---min-4teqkj.jpg",
            image4: "https://ii1.pepperfry.com/media/catalog/product/a/m/800x880/amida-1-seater-sofa-in-beige-colour---mintwud-by-pepperfry-amida-1-seater-sofa-in-beige-colour---min-jsp6ke.jpg",
            price:  "26,999",
            brand: "Mintwud",
            discount: "15,550",
            discount_price:"11,449",
        },
    
        {
            name: "Adyna 1 Seater Sofa in Grey Colour",
            subtype: "1SeaterSofa",
            image1: "https://ii1.pepperfry.com/media/catalog/product/a/d/800x880/adyna-1-seater-sofa-in-grey-colour-by-mintwud-adyna-1-seater-sofa-in-grey-colour-by-mintwud-giszzs.jpg",
            image2: "https://ii1.pepperfry.com/media/catalog/product/a/d/800x880/adyna-1-seater-sofa-in-grey-colour-by-mintwud-adyna-1-seater-sofa-in-grey-colour-by-mintwud-zmclwd.jpg",
            image3: "https://ii1.pepperfry.com/media/catalog/product/a/d/800x880/adyna-1-seater-sofa-in-grey-colour-by-mintwud-adyna-1-seater-sofa-in-grey-colour-by-mintwud-cl969s.jpg",
            image4: "https://ii1.pepperfry.com/media/catalog/product/a/d/800x880/adyna-1-seater-sofa-in-grey-colour-by-mintwud-adyna-1-seater-sofa-in-grey-colour-by-mintwud-4fog4p.jpg",
            price:  "21,999 ",
            brand: "Mintwud",
            discount: "12,500",
            discount_price:"9,499",
        },
    
        {
            name: "Harleston 1 Seater Sofa In Honey Oak Finish",
            subtype: "1SeaterSofa",
            image1: "https://ii1.pepperfry.com/media/catalog/product/h/a/800x880/harleston-1-seater-sofa-in-honey-oak-finish-by-amberville-harleston-1-seater-sofa-in-honey-oak-finis-y6bwwt.jpg",
            image2: "https://ii1.pepperfry.com/media/catalog/product/h/a/800x880/harleston-1-seater-sofa-in-honey-oak-finish-by-amberville-harleston-1-seater-sofa-in-honey-oak-finis-pyjxld.jpg",
            image3: "https://ii1.pepperfry.com/media/catalog/product/h/a/800x880/harleston-1-seater-sofa-in-honey-oak-finish-by-amberville-harleston-1-seater-sofa-in-honey-oak-finis-6qo5tt.jpg",
            image4: "https://ii1.pepperfry.com/media/catalog/product/h/a/800x880/harleston-1-seater-sofa-in-honey-oak-finish-by-amberville-harleston-1-seater-sofa-in-honey-oak-finis-hbzlrt.jpg",
            price:  "32,999",
            brand: "Amberville",
            discount: "13,964",
            discount_price:"19,035",
        },
    
    
        {
            name: "Austin 2 Seater Sofa in Beige Colour",
            subtype: "2SeaterSofa",
            image1: "https://ii1.pepperfry.com/media/catalog/product/a/u/800x400/austin-2-seater-sofa-in-grey-colour-by-arra-austin-2-seater-sofa-in-grey-colour-by-arra-7bhzt7.jpg",
            image2: "https://ii1.pepperfry.com/media/catalog/product/a/u/568x284/austin-2-seater-sofa-in-grey-color-by-arra-austin-2-seater-sofa-in-grey-color-by-arra-gsi1kn.jpg",
            image3: "https://ii1.pepperfry.com/media/catalog/product/a/u/568x284/austin-2-seater-sofa-in-grey-color-by-arra-austin-2-seater-sofa-in-grey-color-by-arra-fuhapf.jpg",
            image4: "https://ii1.pepperfry.com/media/catalog/product/a/u/568x284/austin-2-seater-sofa-in-grey-color-by-arra-austin-2-seater-sofa-in-grey-color-by-arra-5zjjuo.jpg",
            price:  "84,190",
            brand: "ARRA",
            discount: "48,696",
            discount_price:"35,494",
        },
    
        {
            name: "Urban 2 Seater Sofa in Dark Brown Colour",
            subtype: "2SeaterSofa",
            image1: "https://ii1.pepperfry.com/media/catalog/product/u/r/800x400/urban-2-seater-sofa-in-dark-brown-colour-by-homecity-urban-2-seater-sofa-in-dark-brown-colour-by-hom-lzsekv.jpg",
            image2: "https://ii1.pepperfry.com/media/catalog/product/u/r/568x284/urban-2-seater-sofa-in-dark-brown-colour-by-homecity-urban-2-seater-sofa-in-dark-brown-colour-by-hom-unnhrd.jpg",
            image3: "https://ii1.pepperfry.com/media/catalog/product/u/r/568x284/urban-2-seater-sofa-in-dark-brown-colour-by-homecity-urban-2-seater-sofa-in-dark-brown-colour-by-hom-fhngkc.jpg",
            image4: "https://ii1.pepperfry.com/media/catalog/product/u/r/568x284/urban-2-seater-sofa-in-dark-brown-colour-by-homecity-urban-2-seater-sofa-in-dark-brown-colour-by-hom-2h90bu.jpg",
            price:  "52,300",
            brand: "Home City",
            discount: "11,507",
            discount_price:"40,793",
        },
    
    
        {
            name: "Glentana Solid Wood 2 Seater Sofa In Provincial Teak Finish",
            subtype: "2SeaterSofa",
            image1: "https://ii1.pepperfry.com/media/catalog/product/g/l/568x284/glentana-solid-wood-2-seater-sofa-in-provincial-teak-finish-by-woodsworth-glentana-solid-wood-2-seat-fnigjd.jpg",
            image2: "https://ii1.pepperfry.com/media/catalog/product/g/l/568x284/glentana-solid-wood-2-seater-sofa-in-provincial-teak-finish-by-woodsworth-glentana-solid-wood-2-seat-kreevw.jpg",
            image3: "https://ii1.pepperfry.com/media/catalog/product/g/l/568x284/glentana-solid-wood-2-seater-sofa-in-provincial-teak-finish-by-woodsworth-glentana-solid-wood-2-seat-2cdrpr.jpg",
            image4: "https://ii1.pepperfry.com/media/catalog/product/g/l/568x284/glentana-solid-wood-2-seater-sofa-in-provincial-teak-finish-by-woodsworth-glentana-solid-wood-2-seat-3grmgs.jpg",
            price:  "48,999",
            brand: "Woodsworth",
            discount: "19,000",
            discount_price:"29,999",
        },
    
    
        {
            name: "Eiichi 2 Seater Sofa in Light Grey Colour",
            subtype: "2SeaterSofa",
            image1: "https://ii1.pepperfry.com/media/catalog/product/e/i/568x284/eiichi-2-seater-sofa-in-light-grey-colour-by-mintuwd-eiichi-2-seater-sofa-in-light-grey-colour-by-mi-a7tsxo.jpg",
            image2: "https://ii1.pepperfry.com/media/catalog/product/e/i/568x284/eiichi-2-seater-sofa-in-light-grey-colour-by-mintwud-eiichi-2-seater-sofa-in-light-grey-colour-by-mi-t41rbi.jpg",
            image3: "https://ii1.pepperfry.com/media/catalog/product/e/i/568x284/eiichi-2-seater-sofa-in-light-grey-colour-by-mintuwd-eiichi-2-seater-sofa-in-light-grey-colour-by-mi-lz0rqq.jpg",
            image4: "https://ii1.pepperfry.com/media/catalog/product/e/i/568x284/eiichi-2-seater-sofa-in-light-grey-colour-by-mintuwd-eiichi-2-seater-sofa-in-light-grey-colour-by-mi-f6r2gq.jpg",
            price:  "24,499",
            brand: "Mintwud",
            discount: "13,500",
            discount_price:"10,999",
        },
    
    
        {
            name: "Kaylee 2 Seater Velvet Sofa In Charcoal Grey Colour",
            subtype: "2SeaterSofa",
            image1: "https://ii1.pepperfry.com/media/catalog/product/k/a/568x284/kaylee-2-seater-sofa-in-charcoal--grey-colour---casacraft-by-pepperfry-kaylee-2-seater-sofa-in-charc-asdfls.jpg",
            image2: "https://ii1.pepperfry.com/media/catalog/product/k/a/568x284/kaylee-2-seater-sofa-in-charcoal--grey-colour---casacraft-by-pepperfry-kaylee-2-seater-sofa-in-charc-3in1vh.jpg",
            image3: "https://ii1.pepperfry.com/media/catalog/product/k/a/568x284/kaylee-2-seater-sofa-in-charcoal--grey-colour---casacraft-by-pepperfry-kaylee-2-seater-sofa-in-charc-z05a2s.jpg",
            image4: "https://ii1.pepperfry.com/media/catalog/product/k/a/568x284/kaylee-2-seater-sofa-in-charcoal--grey-colour---casacraft-by-pepperfry-kaylee-2-seater-sofa-in-charc-w0enyv.jpg",
            price:  "73,999",
            brand: "CasaCraft",
            discount: "31,750",
            discount_price:"42,249",
        },
    
        {
            name: "Diego 2 Seater Sofa In Denim Blue Colour",
            subtype: "2SeaterSofa",
            image1: "https://ii1.pepperfry.com/media/catalog/product/d/i/800x400/diego-2-seater-sofa-in-denim-blue-colour-by-woodsworth-diego-2-seater-sofa-in-denim-blue-colour-by-w-cgcnub.jpg",
            image2: "https://ii1.pepperfry.com/media/catalog/product/d/i/568x284/diego-two-seater-sofa-in-denim-blue-colour-by-woodsworth-diego-two-seater-sofa-in-denim-blue-colour--30adhe.jpg",
            image3: "https://ii1.pepperfry.com/media/catalog/product/d/i/568x284/diego-two-seater-sofa-in-denim-blue-colour-by-woodsworth-diego-two-seater-sofa-in-denim-blue-colour--yrj3co.jpg",
            image4: "https://ii1.pepperfry.com/media/catalog/product/d/i/568x284/diego-two-seater-sofa-in-denim-blue-colour-by-woodsworth-diego-two-seater-sofa-in-denim-blue-colour--qfynkn.jpg",
            price:  "76,999",
            brand: "Woodsworth",
            discount: "33,357",
            discount_price:"43,642",
        },
    
    
        {
            name: "Haaken 2 Seater Sofa In Blue Colour",
            subtype: "2SeaterSofa",
            image1: "https://ii1.pepperfry.com/media/catalog/product/h/a/800x400/haaken-2-seater-sofa-in-blue-color----woodsworth-by-pepperfry-haaken-2-seater-sofa-in-blue-color-----ox5xco.jpg",
            image2: "https://ii1.pepperfry.com/media/catalog/product/h/a/568x284/haaken-2-seater-sofa-in-blue-color----woodsworth-by-pepperfry-haaken-2-seater-sofa-in-blue-color-----yaanb4.jpg",
            image3: "https://ii1.pepperfry.com/media/catalog/product/h/a/568x284/haaken-2-seater-sofa-in-blue-color----woodsworth-by-pepperfry-haaken-2-seater-sofa-in-blue-color-----yid2yj.jpg",
            image4: "https://ii1.pepperfry.com/media/catalog/product/h/a/568x284/haaken-2-seater-sofa-in-blue-color----woodsworth-by-pepperfry-haaken-2-seater-sofa-in-blue-color-----inwaas.jpg",
            price:  "68,999",
            brand: "Woodsworth",
            discount: "29,536",
            discount_price:"39,463",
        },
    
    
        {
            name: "Aramika Solid Wood 2 Seater Sofa In Honey Oak Finish",
            subtype: "2SeaterSofa",
            image1: "https://ii1.pepperfry.com/media/catalog/product/a/r/800x400/aramika-solid-wood-2-seater-sofa-in-honey-oak-finish-by-mudramark-aramika-solid-wood-2-seater-sofa-i-wuwnnt.jpg",
            image2: "https://ii1.pepperfry.com/media/catalog/product/a/r/568x284/aramika-solid-wood-2-seater-sofa-in-honey-oak-finish-by-mudramark-aramika-solid-wood-2-seater-sofa-i-pavuos.jpg",
            image3: "https://ii1.pepperfry.com/media/catalog/product/a/r/568x284/aramika-solid-wood-2-seater-sofa-in-honey-oak-finish-by-mudramark-aramika-solid-wood-2-seater-sofa-i-v6n50y.jpg",
            image4: "https://ii1.pepperfry.com/media/catalog/product/a/r/568x284/aramika-solid-wood-2-seater-sofa-in-honey-oak-finish-by-mudramark-aramika-solid-wood-2-seater-sofa-i-u4mtzx.jpg",
            price:  "45,999",
            brand: "Mudramark",
            discount: "19,536",
            discount_price:"26,463",
        },
    
    
        {
            name: "Ricardo 2 Seater Velvet Sofa In Wine Colour",
            subtype: "2SeaterSofa",
            image1: "https://ii1.pepperfry.com/media/catalog/product/r/i/800x400/ricardo-2-seater-sofa-in-wine-colour---casacraft-by-pepperfry-ricardo-2-seater-sofa-in-wine-colour---cxv8ld.jpg",
            image2: "https://ii1.pepperfry.com/media/catalog/product/r/i/568x284/ricardo-2-seater-sofa-in-wine-colour---casacraft-by-pepperfry-ricardo-2-seater-sofa-in-wine-colour---7ytffx.jpg",
            image3: "https://ii1.pepperfry.com/media/catalog/product/r/i/568x284/ricardo-2-seater-sofa-in-wine-colour---casacraft-by-pepperfry-ricardo-2-seater-sofa-in-wine-colour---tkrr90.jpg",
            image4: "https://ii1.pepperfry.com/media/catalog/product/r/i/568x284/ricardo-2-seater-sofa-in-wine-colour---casacraft-by-pepperfry-ricardo-2-seater-sofa-in-wine-colour---7doq8q.jpg",
            price:  "71,999",
            brand: "CasaCraft",
            discount: "30,679",
            discount_price:"41,320",
        },
    
    
        {
            name: "Ryder Solid Wood 2 Seater Sofa In Provincial Teak Finish",
            subtype: "2SeaterSofa",
            image1: "https://ii1.pepperfry.com/media/catalog/product/r/y/800x400/ryder-solid-wood-2-seater-sofa-in-provincial-teak-finish-by-woodsworth-ryder-solid-wood-2-seater-sof-ehjhae.jpg",
            image2: "https://ii1.pepperfry.com/media/catalog/product/r/y/568x284/ryder-solid-wood-two-seater-sofa-in-provincial-teak-finish-by-woodsworth-ryder-solid-wood-two-seater-shojyu.jpg",
            image3: "https://ii1.pepperfry.com/media/catalog/product/r/y/568x284/ryder-solid-wood-two-seater-sofa-in-provincial-teak-finish-by-woodsworth-ryder-solid-wood-two-seater-803gzx.jpg",
            image4: "https://ii1.pepperfry.com/media/catalog/product/r/y/568x284/ryder-solid-wood-two-seater-sofa-in-provincial-teak-finish-by-woodsworth-ryder-solid-wood-two-seater-srpzhr.jpg",
            price:  "64,999",
            brand: "Woodsworth",
            discount: "27,857",
            discount_price:"37,142",
        },
    
    
        {
            name: "Bentley Three Seater Sofa in Brown Colour",
            subtype: "3SeaterSofa",
            image1: "https://ii1.pepperfry.com/media/catalog/product/b/e/800x400/bentley-three-seater-sofa-bentley-three-seater-sofa-ll9jky.jpg",
            image2: "https://ii1.pepperfry.com/media/catalog/product/b/e/568x284/bentley-three-seater-sofa-bentley-three-seater-sofa-y1kro8.jpg",
            image3: "https://ii1.pepperfry.com/media/catalog/product/b/e/568x284/bentley-three-seater-sofa-bentley-three-seater-sofa-sqww7k.jpg",
            image4: "https://ii1.pepperfry.com/media/catalog/product/b/e/568x284/bentley-three-seater-sofa-bentley-three-seater-sofa-u4ax6q.jpg",
            price:  "3,68,004",
            brand: "Bselle",
            discount: "1,93,202",
            discount_price:"1,74,802",
        },
    
    
    
        {
            name: "Nish 3 Seater Sofa in Beige Colour",
            subtype: "3SeaterSofa",
            image1: "https://ii1.pepperfry.com/media/catalog/product/n/i/800x400/nish-three-seater-sofa-nish-three-seater-sofa-sj9cue.jpg",
            image2: "https://ii1.pepperfry.com/media/catalog/product/n/i/568x284/nish-three-seater-sofa-nish-three-seater-sofa-wrpjwo.jpg",
            image3: "https://ii1.pepperfry.com/media/catalog/product/n/i/568x284/nish-three-seater-sofa-nish-three-seater-sofa-rgetku.jpg",
            image4: "https://ii1.pepperfry.com/media/catalog/product/n/i/568x284/nish-three-seater-sofa-nish-three-seater-sofa-0hhs5y.jpg",
            price:  "2,83,080",
            brand: "Primos",
            discount: "1,48,617",
            discount_price:"1,34,463",
        },
    
    
    
        {
            name: "Maserati Three Seater Sofa in Gold Colour",
            subtype: "3SeaterSofa",
            image1: "https://ii1.pepperfry.com/media/catalog/product/m/a/800x400/maserati-three-seater-sofa-maserati-three-seater-sofa-m0m9ay.jpg",
            image2: "https://ii1.pepperfry.com/media/catalog/product/m/a/568x284/maserati-three-seater-sofa-maserati-three-seater-sofa-h3bvqw.jpg",
            image3: "https://ii1.pepperfry.com/media/catalog/product/m/a/568x284/maserati-three-seater-sofa-maserati-three-seater-sofa-7litz1.jpg",
            image4: "https://ii1.pepperfry.com/media/catalog/product/m/a/568x284/maserati-three-seater-sofa-maserati-three-seater-sofa-wvgmz8.jpg",
            price:  "2,27,880",
            brand: "Evdelux",
            discount: "1,19,637",
            discount_price:"1,08,243",
        },
    
    
    
        {
            name: "Atlanta 3 Seater Sofa in Black colour",
            subtype: "3SeaterSofa",
            image1: "https://ii1.pepperfry.com/media/catalog/product/a/t/800x400/atlanta-3-seater-sofa-in-black-colour-by-adorn-homez-atlanta-3-seater-sofa-in-black-colour-by-adorn--enbdg1.jpg",
            image2: "https://ii1.pepperfry.com/media/catalog/product/a/t/568x284/atlanta-three-seater-sofa-in-black-colour--by-adorn-homez-atlanta-three-seater-sofa-in-black-colour--beahb5.jpg",
            image3: "https://ii1.pepperfry.com/media/catalog/product/a/t/568x284/atlanta-three-seater-sofa-in-black-colour--by-adorn-homez-atlanta-three-seater-sofa-in-black-colour--ubo0yc.jpg",
            image4: "https://ii1.pepperfry.com/media/catalog/product/a/t/568x284/atlanta-three-seater-sofa-in-black-colour--by-adorn-homez-atlanta-three-seater-sofa-in-black-colour--hc5v94.jpg",
            price:  "41,499",
            brand: "Adorn Homez",
            discount: "16,831",
            discount_price:"24,668 ",
        },
    
    
    
        {
            name: "Milano 3 Seater Sofa in Buff Colour",
            subtype: "3SeaterSofa",
            image1: "https://ii1.pepperfry.com/media/catalog/product/m/i/800x400/milano-3-seater-sofa-in-beige-colour-by-star-india-milano-3-seater-sofa-in-beige-colour-by-star-indi-piva05.jpg",
            image2: "https://ii1.pepperfry.com/media/catalog/product/m/i/568x284/milano-3-seater-sofa-in-beige-colour-by-star-india-milano-3-seater-sofa-in-beige-colour-by-star-indi-diqimo.jpg",
            image3: "https://ii1.pepperfry.com/media/catalog/product/m/i/568x284/milano-3-seater-sofa-in-beige-colour-by-star-india-milano-3-seater-sofa-in-beige-colour-by-star-indi-9dlhuv.jpg",
            image4: "https://ii1.pepperfry.com/media/catalog/product/m/i/568x284/milano-3-seater-sofa-in-beige-colour-by-star-india-milano-3-seater-sofa-in-beige-colour-by-star-indi-inlntv.jpg",
            price:  "1,05,249",
            brand: "Star India",
            discount: "42,709",
            discount_price:"62,540",
        },
    
    
    
        {
            name: "Adyna 3 Seater Sofa in Grey Colour",
            subtype: "3SeaterSofa",
            image1: "https://ii1.pepperfry.com/media/catalog/product/a/d/568x284/adyna-3-seater-sofa-in-grey-colour-by-mintwud-adyna-3-seater-sofa-in-grey-colour-by-mintwud-conhgn.jpg",
            image2: "https://ii1.pepperfry.com/media/catalog/product/a/d/568x284/adyna-3-seater-sofa-in-grey-colour-by-mintwud-adyna-3-seater-sofa-in-grey-colour-by-mintwud-byhzb3.jpg",
            image3: "https://ii1.pepperfry.com/media/catalog/product/a/d/568x284/adyna-3-seater-sofa-in-grey-colour-by-mintwud-adyna-3-seater-sofa-in-grey-colour-by-mintwud-nnr6cc.jpg",
            image4: "https://ii1.pepperfry.com/media/catalog/product/a/d/568x284/adyna-3-seater-sofa-in-grey-colour-by-mintwud-adyna-3-seater-sofa-in-grey-colour-by-mintwud-b3jm94.jpg",
            price:  "37,999",
            brand: "Mintwud",
            discount: "22,000",
            discount_price:"15,999",
        },
    
    
        {
            name: "Eiichi 3 Seater Sofa in Light Grey Colour",
            subtype: "3SeaterSofa",
            image1: "https://ii1.pepperfry.com/media/catalog/product/e/i/800x400/eiichi-3-seater-sofa-in-light-grey-colour-by-mintwud-eiichi-3-seater-sofa-in-light-grey-colour-by-mi-2leknn.jpg",
            image2: "https://ii1.pepperfry.com/media/catalog/product/e/i/568x284/eiichi-3-seater-sofa-in-light-grey-colour-by-mintuwd-eiichi-3-seater-sofa-in-light-grey-colour-by-mi-d99r8q.jpg",
            image3: "https://ii1.pepperfry.com/media/catalog/product/e/i/568x284/eiichi-3-seater-sofa-in-light-grey-colour-by-mintuwd-eiichi-3-seater-sofa-in-light-grey-colour-by-mi-ghoxqw.jpg",
            image4: "https://ii1.pepperfry.com/media/catalog/product/e/i/568x284/eiichi-3-seater-sofa-in-light-grey-colour-by-mintuwd-eiichi-3-seater-sofa-in-light-grey-colour-by-mi-orzzpr.jpg",
            price:  "30,999",
            brand: "Mintwud",
            discount: "15,500",
            discount_price:"15,499",
        },
    
        {
            name: "Margot Solid Wood 3 Seater Sofa In Honey Oak Finish",
            subtype: "3SeaterSofa",
            image1: "https://ii1.pepperfry.com/media/catalog/product/m/a/568x284/margot-solid-wood-three-seater-sofa-in-honey-oak-finish-by-woodsworth-margot-solid-wood-three-seater-nawmfn.jpg",
            image2: "https://ii1.pepperfry.com/media/catalog/product/m/a/568x284/margot-solid-wood-3-seater-sofa-in-honey-oak-finish-by-woodsworth-margot-solid-wood-3-seater-sofa-in-sv8wz7.jpg",
            image3: "https://ii1.pepperfry.com/media/catalog/product/m/a/568x284/margot-solid-wood-three-seater-sofa-in-honey-oak-finish-by-woodsworth-margot-solid-wood-three-seater-yg8spn.jpg",
            image4: "https://ii1.pepperfry.com/media/catalog/product/m/a/568x284/margot-solid-wood-three-seater-sofa-in-honey-oak-finish-by-woodsworth-margot-solid-wood-three-seater-w01vob.jpg",
            price:  "61,999",
            brand: "Woodsworth",
            discount: "26,714",
            discount_price:"35,285",
        },
    
    
        {
            name: "Roger Solid Wood 3 Seater Sofa In Provincial Teak Finish",
            subtype: "3SeaterSofa",
            image1: "https://ii1.pepperfry.com/media/catalog/product/r/o/800x400/roger-solid-wood-3-seater-sofa-in-provincial-teak-finish-by-woodsworth-roger-solid-wood-3-seater-sof-g358sb.jpg",
            image2: "https://ii1.pepperfry.com/media/catalog/product/r/o/568x284/roger-solid-wood-3-seater-sofa-in-provincial-teak-finish-by-woodsworth-roger-solid-wood-3-seater-sof-rserun.jpg",
            image3: "https://ii1.pepperfry.com/media/catalog/product/r/o/568x284/roger-solid-wood-3-seater-sofa-in-provincial-teak-finish-by-woodsworth-roger-solid-wood-3-seater-sof-oljp6f.jpg",
            image4: "https://ii1.pepperfry.com/media/catalog/product/r/o/568x284/roger-solid-wood-3-seater-sofa-in-provincial-teak-finish-by-woodsworth-roger-solid-wood-3-seater-sof-ryhilb.jpg",
            price:  "56,999",
            brand: "Woodsworth",
            discount: "24,500",
            discount_price:"32,499",
        },
    
    
        {
            name: "Jefren 3 Seater Sofa In Beige Colour",
            subtype: "3SeaterSofa",
            image1: "https://ii1.pepperfry.com/media/catalog/product/j/e/800x400/jefren-3-seater-sofa-in-beige-colour---woodsworth-by-pepperfry-jefren-3-seater-sofa-in-beige-colour--f20ikf.jpg",
            image2: "https://ii1.pepperfry.com/media/catalog/product/j/e/568x284/jefren-3-seater-sofa-in-beige-colour---woodsworth-by-pepperfry-jefren-3-seater-sofa-in-beige-colour--igu1da.jpg",
            image3: "https://ii1.pepperfry.com/media/catalog/product/j/e/568x284/jefren-3-seater-sofa-in-beige-colour---woodsworth-by-pepperfry-jefren-3-seater-sofa-in-beige-colour--vzmcns.jpg",
            image4: "https://ii1.pepperfry.com/media/catalog/product/j/e/568x284/jefren-3-seater-sofa-in-beige-colour---woodsworth-by-pepperfry-jefren-3-seater-sofa-in-beige-colour--purq5n.jpg",
            price:  "75,999",
            brand: "Woodsworth",
            discount: "32,357",
            discount_price:"43,642",
        },
    
    
        {
            name: "Barcelona LHS Sectional Sofa in Navy Colour",
            subtype: "SectionalSofa",
            image1: "https://ii1.pepperfry.com/media/catalog/product/b/a/568x284/barcelona-corner-sofa-barcelona-corner-sofa-mvn5yr.jpg",
            image2: "https://ii1.pepperfry.com/media/catalog/product/b/a/568x284/barcelona-corner-sofa-barcelona-corner-sofa-wb5kit.jpg",
            image3: "https://ii1.pepperfry.com/media/catalog/product/b/a/568x284/barcelona-corner-sofa-barcelona-corner-sofa-mvn5yr.jpg",
            image4: "https://ii1.pepperfry.com/media/catalog/product/b/a/568x284/barcelona-corner-sofa-barcelona-corner-sofa-q9rktm.jpg",
            price:  "5,09,544",
            brand: "Didvani",
            discount: "2,67,511",
            discount_price:"2,42,033",
        },
    
    
        {
            name: "Aleandro 3 Seater LHS Sectional Sofa in Beige Colour",
            subtype: "SectionalSofa",
            image1: "https://ii1.pepperfry.com/media/catalog/product/a/l/800x400/aleandro-3-seater-lhs-sectional-sofa-in-beige-colour-by-casacraft-aleandro-3-seater-lhs-sectional-so-agwyxs.jpg",
            image2: "https://ii1.pepperfry.com/media/catalog/product/a/l/568x284/aleandro-lhs-three-seater-sofa-with-lounger---cushions-in-beige-colour-by-casacraft-aleandro-lhs-thr-gh9b41.jpg",
            image3: "https://ii1.pepperfry.com/media/catalog/product/a/l/568x284/aleandro-lhs-three-seater-sofa-with-lounger---cushions-in-beige-colour-by-casacraft-aleandro-lhs-thr-hoojpo.jpg",
            image4: "https://ii1.pepperfry.com/media/catalog/product/a/l/568x284/aleandro-3-seater-lhs-sectional-sofa-in-beige-colour-by-casacraft-aleandro-3-seater-lhs-sectional-so-agwyxs.jpg",
            price:  "1,62,999",
            brand: "CasaCraft",
            discount: "69,679",
            discount_price:"93,320",
        },
    
    
    
        {
            name: "Miranda Lhs 3 Seater Sofa With Lounger In Charcoal Grey Colour",
            subtype: "SectionalSofa",
            image1: "https://ii1.pepperfry.com/media/catalog/product/m/i/568x284/miranda-lhs-three-seater-sofa-with-lounger-in-charcoal-grey-colour-by-woodsworth-miranda-lhs-three-s-gqxz7x.jpg",
            image2: "https://ii1.pepperfry.com/media/catalog/product/m/i/568x284/miranda-lhs-three-seater-sofa-with-lounger-in-charcoal-grey-colour-by-woodsworth-miranda-lhs-three-s-wgditr.jpg",
            image3: "https://ii1.pepperfry.com/media/catalog/product/m/i/568x284/miranda-lhs-three-seater-sofa-with-lounger-in-charcoal-grey-colour-by-woodsworth-miranda-lhs-three-s-wa4ass.jpg",
            image4: "https://ii1.pepperfry.com/media/catalog/product/m/i/568x284/miranda-lhs-3-seater-sofa-with-lounger-in-charcoal-grey-colour---woodsworth-by-pepperfry-miranda-lhs-wt0nvn.jpg",
            price:  "1,29,999",
            brand: "Woodsworth",
            discount: "55,250",
            discount_price:"74,749",
        },
    
    
        {
            name: "Riviera RHS 6 Seater Sofa in Grey & Yellow Colour",
            subtype: "SectionalSofa",
            image1: "https://ii1.pepperfry.com/media/catalog/product/r/i/800x400/riviera-6-seater-sofa-in-grey---yellowcolour-by-arra-riviera-6-seater-sofa-in-grey---yellowcolour-by-ybxowa.jpg",
            image2: "https://ii1.pepperfry.com/media/catalog/product/r/i/568x284/riviera-6-seater-sofa-in-grey---yellowcolour-by-arra-riviera-6-seater-sofa-in-grey---yellowcolour-by-83ncem.jpg",
            image3: "https://ii1.pepperfry.com/media/catalog/product/r/i/568x284/riviera-rhs-6-seater-sofa-in-grey---yellow-colour-by-arra-riviera-rhs-6-seater-sofa-in-grey---yellow-lvdyxq.jpg",
            image4: "https://ii1.pepperfry.com/media/catalog/product/r/i/568x284/riviera-6-seater-sofa-in-grey---yellowcolour-by-arra-riviera-6-seater-sofa-in-grey---yellowcolour-by-gf4tjd.jpg",
            price:  "47,900",
            brand: "ARRA",
            discount: "20,904",
            discount_price:"26,996",
        },
    
        {
            name: "Santiago RHS 3 Seater Sofa Set with Ottoman in Teal Green Colour",
            subtype: "SectionalSofa",
            image1: "https://ii1.pepperfry.com/media/catalog/product/s/a/568x284/santiago-6-seater-sofa-set-with-ottoman-in-teal-color-by-arra-santiago-6-seater-sofa-set-with-ottoma-jxrpoo.jpg",
            image2: "https://ii1.pepperfry.com/media/catalog/product/s/a/568x284/santiago-rhs-3-seater-sofa-set-with-ottoman-in-teal-green-colour-by-arra-santiago-rhs-3-seater-sofa--6etwf7.jpg",
            image3: "https://ii1.pepperfry.com/media/catalog/product/s/a/568x284/santiago-rhs-3-seater-sofa-set-with-ottoman-in-teal-green-colour-by-arra-santiago-rhs-3-seater-sofa--yoeajn.jpg",
            image4: "https://ii1.pepperfry.com/media/catalog/product/s/a/568x284/santiago-6-seater-sofa-set-with-ottoman-in-teal-color-by-arra-santiago-6-seater-sofa-set-with-ottoma-oeyosy.jpg",
            price:  "99,990",
            brand: "ARRA",
            discount: "50,564",
            discount_price:"49,426",
        },
    
    
        {
            name: "Bliss 6 Seater LHS Sectional Sofa In Grey & Blue Colour",
            subtype: "SectionalSofa",
            image1: "https://ii1.pepperfry.com/media/catalog/product/b/l/800x400/bliss-6-seater-rhs-sectional-sofa-in-grey---blue-colour-in-by-trevi-furniture-bliss-6-seater-rhs-sec-z1eahk.jpg",
            image2: "https://ii1.pepperfry.com/media/catalog/product/b/l/568x284/bliss-6-seater-lhs-sectional-sofa-in-grey---blue-colour-by-trevi-furniture-bliss-6-seater-lhs-sectio-v5d5zv.jpg",
            image3: "https://ii1.pepperfry.com/media/catalog/product/b/l/568x284/bliss-6-seater-lhs-sectional-sofa-in-grey---blue-colour-by-trevi-furniture-bliss-6-seater-lhs-sectio-zgsdbc.jpg",
            image4: "https://ii1.pepperfry.com/media/catalog/product/b/l/568x284/bliss-6-seater-lhs-sectional-sofa-in-grey---blue-colour-by-trevi-furniture-bliss-6-seater-lhs-sectio-zgsdbc.jpg",
            price:  "49,999",
            brand: "Trevi Furniture",
            discount: "23,810",
            discount_price:"26,189",
        },
    
    
        {
            name: "Belem 3 Seater RHS Sectional Sofa in Sandy Brown Colour",
            subtype: "SectionalSofa",
            image1: "https://ii1.pepperfry.com/media/catalog/product/b/e/800x400/belem-3-seater-rhs-sectional-sofa-in-sandy-brown-colour-by-casacraft-belem-3-seater-rhs-sectional-so-lkirwj.jpg",
            image2: "https://ii1.pepperfry.com/media/catalog/product/b/e/568x284/belem-rhs-three-seater-sofa-with-lounger-in-sandy-brown-by-casacraft-belem-rhs-three-seater-sofa-wit-p08jvq.jpg",
            image3: "https://ii1.pepperfry.com/media/catalog/product/b/e/568x284/belem-rhs-three-seater-sofa-with-lounger-in-sandy-brown-by-casacraft-belem-rhs-three-seater-sofa-wit-iqvwi4.jpg",
            image4: "https://ii1.pepperfry.com/media/catalog/product/b/e/568x284/belem-rhs-three-seater-sofa-with-lounger-in-sandy-brown-by-casacraft-belem-rhs-three-seater-sofa-wit-iqvwi4.jpg",
            price:  "1,23,999",
            brand: "CasaCraft",
            discount: "52,964",
            discount_price:"71,035",
        },
    
    
        {
            name: "Hugo Lhs 2 Seater Sofa With Lounger In Charcoal Grey Colour",
            subtype: "SectionalSofa",
            image1: "https://ii1.pepperfry.com/media/catalog/product/h/u/800x400/hugo-lhs-2-seater-sofa-with-lounger-in-charcoal-grey-colour-by-woodsworth-hugo-lhs-2-seater-sofa-wit-v4iknv.jpg",
            image2: "https://ii1.pepperfry.com/media/catalog/product/h/u/568x284/hugo-lhs-two-seater-sofa-with-lounger-in-charcoal-grey-colour-by-woodsworth-hugo-lhs-two-seater-sofa-eldx7g.jpg",
            image3: "https://ii1.pepperfry.com/media/catalog/product/h/u/568x284/hugo-lhs-2-seater-sofa-with-lounger-in-charcoal-grey-colour---woodsworth-by-pepperfry-hugo-lhs-2-sea-zojkn2.jpg",
            image4: "https://ii1.pepperfry.com/media/catalog/product/h/u/568x284/hugo-lhs-two-seater-sofa-with-lounger-in-charcoal-grey-colour-by-woodsworth-hugo-lhs-two-seater-sofa-tefzdg.jpg",
            price:  "1,24,999",
            brand: "Woodsworth",
            discount: "53,500",
            discount_price:"71,499",
        },
    
        {
            name: "Bliss 6 Seater RHS Sectional Sofa in Black & Grey Colour",
            subtype: "SectionalSofa",
            image1: "https://ii1.pepperfry.com/media/catalog/product/b/l/800x400/bliss-6-seater-rhs-sectional-sofa-in-black---grey-colour-by-trevi-furniture-bliss-6-seater-rhs-secti-bwuwfq.jpg",
            image2: "https://ii1.pepperfry.com/media/catalog/product/b/l/568x284/bliss-6-seater-rhs-sectional-sofa-in-black---grey-colour-by-trevi-furniture-bliss-6-seater-rhs-secti-ss4ucz.jpg",
            image3: "https://ii1.pepperfry.com/media/catalog/product/b/l/568x284/bliss-6-seater-rhs-sectional-sofa-in-black---grey-colour-by-trevi-furniture-bliss-6-seater-rhs-secti-dlryw4.jpg",
            image4: "https://ii1.pepperfry.com/media/catalog/product/b/l/568x284/bliss-6-seater-sectional-sofa-rhs-in-balck---grey-colour-by-trevi-furniture-bliss-6-seater-sectional-tvsthk.jpg",
            price:  "49,999",
            brand: "Trevi Furniture",
            discount: "26,190",
            discount_price:"23,809",
        },
    
    
        {
            name: "Amanda RHS Sectional Sofa in Sandy Brown Colour",
            subtype: "SectionalSofa",
            image1: "https://ii1.pepperfry.com/media/catalog/product/a/m/568x284/amanda-rhs-sectional-sofa-in-sandy-brown-colour---casacraft-by-pepperfry-amanda-rhs-sectional-sofa-i-opnwlv.jpg",
            image2: "https://ii1.pepperfry.com/media/catalog/product/a/m/568x284/amanda-rhs-sectional-sofa-in-sandy-brown-colour---casacraft-by-pepperfry-amanda-rhs-sectional-sofa-i-wzfshv.jpg",
            image3: "https://ii1.pepperfry.com/media/catalog/product/a/m/568x284/amanda-rhs-sectional-sofa-in-sandy-brown-colour---casacraft-by-pepperfry-amanda-rhs-sectional-sofa-i-nfhfim.jpg",
            image4: "https://ii1.pepperfry.com/media/catalog/product/a/m/568x284/amanda-rhs-sectional-sofa-in-sandy-brown-colour---casacraft-by-pepperfry-amanda-rhs-sectional-sofa-i-2mjvfz.jpg",
            price:  "1,20,999",
            brand: "CasaCraft",
            discount: "51,821",
            discount_price:"69,178",
        },
    
    
        {
            name: "Stratus 1 seater Manual Recliner in Brown Colour",
            subtype: "1SeaterRecliners",
            image1: "https://ii1.pepperfry.com/media/catalog/product/s/t/800x880/stratus-1-seater-manual-recliner-in-brown-colour-by-bantia-furniture-stratus-1-seater-manual-recline-5rgdmd.jpg",
            image2: "https://ii1.pepperfry.com/media/catalog/product/s/t/800x880/stratus-1-seater-manual-recliner-in-brown-colour-by-bantia-furniture-stratus-1-seater-manual-recline-jud3ny.jpg",
            image3: "https://ii1.pepperfry.com/media/catalog/product/s/t/800x880/stratus-1-seater-manual-recliner-in-brown-colour-by-bantia-furniture-stratus-1-seater-manual-recline-xps4fg.jpg",
            image4: "https://ii1.pepperfry.com/media/catalog/product/s/t/800x880/stratus-1-seater-manual-recliner-in-brown-colour-by-bantia-furniture-stratus-1-seater-manual-recline-oy7meu.jpg",
            price:  "57,999",
            brand: "Bantia Furniture",
            discount: "21,601",
            discount_price:"36,398",
        },
    
    
        {
            name: "Zebulun Leatherette 1 Seater Manual Recliner in Dark Grey Color",
            subtype: "1SeaterRecliners",
            image1: "https://ii1.pepperfry.com/media/catalog/product/z/e/800x880/zebulun-leatherette-1-seater-recliner-in-dark-grey-color---mintwud-by-pepperfry-zebulun-leatherette--o6z5cg.jpg",
            image2: "https://ii1.pepperfry.com/media/catalog/product/z/e/800x880/zebulun-leatherette-1-seater-recliner-in-dark-grey-color---mintwud-by-pepperfry-zebulun-leatherette--riceia.jpg",
            image3: "https://ii1.pepperfry.com/media/catalog/product/z/e/800x880/zebulun-leatherette-1-seater-recliner-in-dark-grey-color---mintwud-by-pepperfry-zebulun-leatherette--4kbuis.jpg",
            image4: "https://ii1.pepperfry.com/media/catalog/product/z/e/800x880/zebulun-leatherette-1-seater-recliner-in-dark-grey-color---mintwud-by-pepperfry-zebulun-leatherette--k00dny.jpg",
            price:  "59,999",
            brand: "Mintwud",
            discount: "33,516",
            discount_price:"26,483",
        },
    
    
        {
            name: "Classy 1 seater Manual Recliner with cupholders in White Colour",
            subtype: "1SeaterRecliners",
            image1: "https://ii1.pepperfry.com/media/catalog/product/c/l/800x880/classy-1-seater-manual-recliner-with-cupholders-in-white-colour-by-bantia-furniture-classy-1-seater--4aj9vg.jpg",
            image2: "https://ii1.pepperfry.com/media/catalog/product/c/l/800x880/classy-1-seater-manual-recliner-with-cupholders-in-white-colour-by-bantia-furniture-classy-1-seater--lvslju.jpg",
            image3: "https://ii1.pepperfry.com/media/catalog/product/c/l/800x880/classy-1-seater-manual-recliner-with-cupholders-in-white-colour-by-bantia-furniture-classy-1-seater--wdp0re.jpg",
            image4: "https://ii1.pepperfry.com/media/catalog/product/c/l/800x880/classy-1-seater-manual-recliner-with-cupholders-in-white-colour-by-bantia-furniture-classy-1-seater--xzwvsa.jpg",
            price:  "38,999",
            brand: "Bantia Furniture",
            discount: "24,500",
            discount_price:"",
        },
    
    
        {
            name: "Harvey 1 Seater Manual Recliner in Black Colour",
            subtype: "1SeaterRecliners",
            image1: "https://ii1.pepperfry.com/media/catalog/product/h/a/800x880/harvey-1-seater-manual-recliner-in-black-colour-by-casastyle-harvey-1-seater-manual-recliner-in-blac-ouiyro.jpg",
            image2: "https://ii1.pepperfry.com/media/catalog/product/h/a/800x880/harvey-1-seater-manual-recliner-in-black-colour-by-casastyle-harvey-1-seater-manual-recliner-in-blac-3pswi6.jpg",
            image3: "https://ii1.pepperfry.com/media/catalog/product/h/a/800x880/harvey-1-seater-manual-recliner-in-black-colour-by-casastyle-harvey-1-seater-manual-recliner-in-blac-64ppcv.jpg",
            image4: "https://ii1.pepperfry.com/media/catalog/product/h/a/800x880/harvey-1-seater-manual-recliner-in-black-colour-by-casastyle-harvey-1-seater-manual-recliner-in-blac-fqlreg.jpg",
            price:  "51,899",
            brand: "Casastyle",
            discount: "30,820",
            discount_price:"21,079",
        },
    
        {
            name: "Wonder 1 Seater Recliner in Red Colour",
            subtype: "1SeaterRecliners",
            image1: "https://ii1.pepperfry.com/media/catalog/product/w/o/800x880/wonder-1-seater-recliner-in-red-colour-by-durian-wonder-1-seater-recliner-in-red-colour-by-durian-1vlbvq.jpg",
            image2: "https://ii1.pepperfry.com/media/catalog/product/w/o/800x880/wonder-recliner-in-red-colour-by-durian-wonder-recliner-in-red-colour-by-durian-fxh0ce.jpg",
            image3: "https://ii1.pepperfry.com/media/catalog/product/w/o/800x880/wonder-recliner-in-red-colour-by-durian-wonder-recliner-in-red-colour-by-durian-jvbajb.jpg",
            image4: "https://ii1.pepperfry.com/media/catalog/product/w/o/800x880/wonder-recliner-in-red-colour-by-durian-wonder-recliner-in-red-colour-by-durian-gqyenv.jpg",
            price:  "1,14,400",
            brand: "Durian",
            discount: "57,200",
            discount_price:"57,200",
        },
    
        {
            name: "Alexandria 1 Seater Manual Recliner in Teal Colour",
            subtype: "1SeaterRecliners",
            image1: "https://ii1.pepperfry.com/media/catalog/product/a/l/800x880/alexandria-1-seater-recliner-in-teal-colour-by-furnitech-alexandria-1-seater-recliner-in-teal-colour-dadmzo.jpg",
            image2: "https://ii1.pepperfry.com/media/catalog/product/a/l/800x880/alexandria-1-seater-manual-recliner-in-teal-colour-by-furnitech-alexandria-1-seater-manual-recliner--u1vufo.jpg",
            image3: "https://ii1.pepperfry.com/media/catalog/product/a/l/800x880/alexandria-one-seater-recliner-in-teal-colour-by-casacraft-alexandria-one-seater-recliner-in-teal-co-iaucv6.jpg",
            image4: "https://ii1.pepperfry.com/media/catalog/product/a/l/800x880/alexandria-one-seater-recliner-in-teal-colour-by-casacraft-alexandria-one-seater-recliner-in-teal-co-wmwyxa.jpg",
            price:  "58,999",
            brand: "Furnitech",
            discount: "23,937",
            discount_price:"35,062",
        },
    
    
        {
            name: "Bert 1 Seater Recliner in Brown Colour",
            subtype: "1SeaterRecliners",
            image1: "https://ii1.pepperfry.com/media/catalog/product/b/e/800x880/bert-1-seater-recliner-in-brown-colour-by-durian-bert-1-seater-recliner-in-brown-colour-by-durian-jwpm3o.jpg",
            image2: "https://ii1.pepperfry.com/media/catalog/product/b/e/800x880/bert-one-seater-recliner-in-brown-colour-by-durian-bert-one-seater-recliner-in-brown-colour-by-duria-zo04zq.jpg",
            image3: "https://ii1.pepperfry.com/media/catalog/product/b/e/800x880/bert-one-seater-recliner-in-brown-colour-by-durian-bert-one-seater-recliner-in-brown-colour-by-duria-uqehz3.jpg",
            image4: "https://ii1.pepperfry.com/media/catalog/product/b/e/800x880/bert-one-seater-recliner-in-brown-colour-by-durian-bert-one-seater-recliner-in-brown-colour-by-duria-er5vjp.jpg",
            price:  "98,200",
            brand: "Durian",
            discount: "49,100",
            discount_price:"49,100",
        },
    
    
        {
            name: "Charlie 1 seater Power Rocker Recliner with vibrater",
            subtype: "1SeaterRecliners",
            image1: "https://ii1.pepperfry.com/media/catalog/product/c/h/800x880/charlie-1-seater-power-rocker-recliner-with-vibrater-by-durian-charlie-1-seater-power-rocker-recline-jwtox2.jpg",
            image2: "https://ii1.pepperfry.com/media/catalog/product/c/h/800x880/charlie-1-seater-power-rocker-recliner-with-vibrater-by-durian-charlie-1-seater-power-rocker-recline-jwtox2.jpg",
            image3: "https://ii1.pepperfry.com/media/catalog/product/c/h/800x880/charlie-one-seater-power-rocker-recliner-with-vibrater-by-durian-charlie-one-seater-power-rocker-rec-vis29q.jpg",
            image4: "https://ii1.pepperfry.com/media/catalog/product/c/h/800x880/charlie-one-seater-power-rocker-recliner-with-vibrater-by-durian-charlie-one-seater-power-rocker-rec-zp3srj.jpg",
            price:  "1,23,000",
            brand: "Durian",
            discount: "43,050",
            discount_price:"79,950",
        },
    
    
        {
            name: "Houston Recliner 1 Seater In Green Colour",
            subtype: "1SeaterRecliners",
            image1: "https://ii1.pepperfry.com/media/catalog/product/h/o/800x880/houston-recliner-1-seater-in-green-colour-by-evok-houston-recliner-1-seater-in-green-colour-by-evok-poh6su.jpg",
            image2: "https://ii1.pepperfry.com/media/catalog/product/h/o/800x880/houston-recliner-1-seater-in-green-colour-by-evok-houston-recliner-1-seater-in-green-colour-by-evok-yy79iz.jpg",
            image3: "https://ii1.pepperfry.com/media/catalog/product/h/o/800x880/houston-recliner-1-seater-in-green-colour-by-evok-houston-recliner-1-seater-in-green-colour-by-evok-bbhzb7.jpg",
            image4: "https://ii1.pepperfry.com/media/catalog/product/h/o/800x880/houston-recliner-1-seater-in-green-colour-by-evok-houston-recliner-1-seater-in-green-colour-by-evok-jbytmf.jpg",
            price:  "65,970",
            brand: " Evok",
            discount: "40,980",
            discount_price:"24,990",
        },
    
        {
            name: "Dazzle 1 Seater Rocking & Revolving Manual Recliner in Black Colour",
            subtype: "1SeaterRecliners",
            image1: "https://ii1.pepperfry.com/media/catalog/product/d/a/800x880/dazzle-one-seater-push-back-recliner-dazzle-one-seater-push-back-recliner-eizycv.jpg",
            image2: "https://ii1.pepperfry.com/media/catalog/product/d/a/800x880/dazzle-one-seater-push-back-recliner-dazzle-one-seater-push-back-recliner-bd6rrz.jpg",
            image3: "https://ii1.pepperfry.com/media/catalog/product/d/a/800x880/dazzle-one-seater-push-back-recliner-dazzle-one-seater-push-back-recliner-vnawya.jpg",
            image4: "https://ii1.pepperfry.com/media/catalog/product/d/a/800x880/dazzle-one-seater-push-back-recliner-dazzle-one-seater-push-back-recliner-kakewg.jpg",
            price:  "45,999",
            brand: "Furnish your dream",
            discount: "11,200",
            discount_price:"34,799",
        },
    
    
        {
            name: "Zerodha 2 Seater Manual Recliner Sofa in Grey Colour",
            subtype: "2SeaterRecliners",
            image1: "https://ii1.pepperfry.com/media/catalog/product/z/e/800x880/zerodha-2-seater-manual-recliner-sofa-in-grey-colour-by-furnitech-zerodha-2-seater-manual-recliner-s-l7euh2.jpg",
            image2: "https://ii1.pepperfry.com/media/catalog/product/z/e/800x880/zerodha-2-seater-manual-recliner-sofa-in-grey-colour-by-furnitech-zerodha-2-seater-manual-recliner-s-m56zbj.jpg",
            image3: "https://ii1.pepperfry.com/media/catalog/product/z/e/800x880/zerodha-2-seater-manual-recliner-sofa-in-grey-colour-by-furnitech-zerodha-2-seater-manual-recliner-s-vrldsy.jpg",
            image4: "https://ii1.pepperfry.com/media/catalog/product/z/e/800x880/zerodha-2-seater-manual-recliner-sofa-in-grey-colour-by-furnitech-zerodha-2-seater-manual-recliner-s-krw7ml.jpg",
            price:  "99,249",
            brand: "Furnitech",
            discount: "40,251",
            discount_price:"58,998",
        },
    
    
        {
            name: "4 Square 2 Seater Recliner in Brown Colour",
            subtype: "2SeaterRecliners",
            image1: "https://ii1.pepperfry.com/media/catalog/product/f/o/800x880/four-square-2-seater-recliner-in-brown-colour-by-star-india-four-square-2-seater-recliner-in-brown-c-djea2u.jpg",
            image2: "https://ii1.pepperfry.com/media/catalog/product/f/o/800x880/four-square-two-seater-recliner--motorised--in-brown-colour-by-star-india-four-square-two-seater-rec-vs5pe0.jpg",
            image3: "https://ii1.pepperfry.com/media/catalog/product/f/o/800x880/four-square-two-seater-recliner--motorised--in-brown-colour-by-star-india-four-square-two-seater-rec-hucd3k.jpg",
            image4: "https://ii1.pepperfry.com/media/catalog/product/f/o/800x880/four-square-two-seater-recliner--motorised--in-brown-colour-by-star-india-four-square-two-seater-rec-xpippc.jpg",
            price:  "1,38,999",
            brand: "Star India",
            discount: "56,399",
            discount_price:"82,600",
        },
    
    
        {
            name: "Anton 2 Seater Recliner in Warm Brown Colour",
            subtype: "2SeaterRecliners",
            image1: "https://ii1.pepperfry.com/media/catalog/product/a/n/800x880/anton-two-seater-recliner-in-warm-brown-colour-by-durian-anton-two-seater-recliner-in-warm-brown-col-qlxxu5.jpg",
            image2: "https://ii1.pepperfry.com/media/catalog/product/a/n/800x880/anton-two-seater-recliner-in-warm-brown-colour-by-durian-anton-two-seater-recliner-in-warm-brown-col-oevz0u.jpg",
            image3: "https://ii1.pepperfry.com/media/catalog/product/a/n/800x880/anton-two-seater-recliner-in-warm-brown-colour-by-durian-anton-two-seater-recliner-in-warm-brown-col-fzj5jy.jpg",
            image4: "https://ii1.pepperfry.com/media/catalog/product/a/n/800x880/anton-two-seater-recliner-in-warm-brown-colour-by-durian-anton-two-seater-recliner-in-warm-brown-col-jf8szi.jpg",
            price:  "1,53,800",
            brand: "Durian",
            discount: "76,900",
            discount_price:"76,900",
        },
    
    
    
        {
            name: "Naple Manual Recliner 2 SeaterIn Cream Colour",
            subtype: "2SeaterRecliners",
            image1: "https://ii1.pepperfry.com/media/catalog/product/n/a/800x880/naple--manual-recliner-2-seater-sofa-in-cream-colour-by-evok-naple--manual-recliner-2-seater-sofa-in-piz0qy.jpg",
            image2: "https://ii1.pepperfry.com/media/catalog/product/n/a/800x880/naple--manual-recliner-2-seater-sofa-in-cream-colour-by-evok-naple--manual-recliner-2-seater-sofa-in-olqthu.jpg",
            image3: "https://ii1.pepperfry.com/media/catalog/product/n/a/800x880/naple--manual-recliner-2-seater-sofa-in-cream-colour-by-evok-naple--manual-recliner-2-seater-sofa-in-05tp7v.jpg",
            image4: "https://ii1.pepperfry.com/media/catalog/product/n/a/800x880/naple--manual-recliner-2-seater-sofa-in-cream-colour-by-evok-naple--manual-recliner-2-seater-sofa-in-ssyfvi.jpg",
            price:  "99,990",
            brand: "Evok",
            discount: "53,000",
            discount_price:"46,990",
        },
    
    
        {
            name: "Helsinki 2 Seater Motorised Recliner in Brown Colour",
            subtype: "2SeaterRecliners",
            image1: "https://ii1.pepperfry.com/media/catalog/product/h/e/568x284/helsinki-2-seater-recliner-in-brown-colour-by-home-centre-helsinki-2-seater-recliner-in-brown-colour-ypftki.jpg",
            image2: "https://ii1.pepperfry.com/media/catalog/product/h/e/568x284/helsinki-2-seater-recliner-in-brown-colour-by-home-centre-helsinki-2-seater-recliner-in-brown-colour-rzccay.jpg",
            image3: "https://ii1.pepperfry.com/media/catalog/product/h/e/568x284/helsinki-2-seater-recliner-in-brown-colour-by-home-centre-helsinki-2-seater-recliner-in-brown-colour-eoxs58.jpg",
            image4: "https://ii1.pepperfry.com/media/catalog/product/h/e/568x284/helsinki-2-seater-recliner-in-brown-colour-by-home-centre-helsinki-2-seater-recliner-in-brown-colour-hue5fz.jpg",
            price:  "2,39,933",
            brand: "Home Centre",
            discount: "47,987",
            discount_price:"1,91,946",
        },
    
    
        {
            name: "Clinton 2 Seater Recliner in Dark Brown Colour",
            subtype: "2SeaterRecliners",
            image1: "https://ii1.pepperfry.com/media/catalog/product/c/l/800x880/clinton-2-seater-recliner-in-dark-brown-colour-by-evok-clinton-2-seater-recliner-in-dark-brown-colou-ydygqd.jpg",
            image2: "https://ii1.pepperfry.com/media/catalog/product/c/l/800x880/clinton-2-seater-recliner-in-dark-brown-colour-by-evok-clinton-2-seater-recliner-in-dark-brown-colou-2oop9g.jpg",
            image3: "https://ii1.pepperfry.com/media/catalog/product/c/l/800x880/clinton-two-seater-sofa-in-dark-brown-colour-by-evok-clinton-two-seater-sofa-in-dark-brown-colour-by-k5klxy.jpg",
            image4: "https://ii1.pepperfry.com/media/catalog/product/c/l/800x880/clinton-two-seater-sofa-in-dark-brown-colour-by-evok-clinton-two-seater-sofa-in-dark-brown-colour-by-x07j0q.jpg",
            price:  "88,725",
            brand: "Evok",
            discount: "41,735",
            discount_price:"46,990",
        },
    
    
        {
            name: "Apollo 2 Seater Recliner in Brown Colour",
            subtype: "2SeaterRecliners",
            image1: "https://ii1.pepperfry.com/media/catalog/product/a/p/800x880/apollo-2-seater-recliner-in-brown-color-by-home-centre-apollo-2-seater-recliner-in-brown-color-by-ho-stqeh2.jpg",
            image2: "https://ii1.pepperfry.com/media/catalog/product/a/p/800x880/apollo-2-seater-recliner-in-brown-color-by-home-centre-apollo-2-seater-recliner-in-brown-color-by-ho-q9vdhd.jpg",
            image3: "https://ii1.pepperfry.com/media/catalog/product/a/p/800x880/apollo-2-seater-recliner-in-brown-color-by-home-centre-apollo-2-seater-recliner-in-brown-color-by-ho-fko4st.jpg",
            image4: "https://ii1.pepperfry.com/media/catalog/product/a/p/800x880/apollo-2-seater-recliner-in-brown-color-by-home-centre-apollo-2-seater-recliner-in-brown-color-by-ho-57wuog.jpg",
            price:  "1,15,643",
            brand: "Home Centre",
            discount: "28,911",
            discount_price:"86,732",
        },
    
    
        {
            name: "Sumo 2 Seater Recliner in Orange and Grey Recliner",
            subtype: "2SeaterRecliners",
            image1: "https://ii1.pepperfry.com/media/catalog/product/s/u/800x880/sumo-2-seater-recliner-in-orange-and-grey-recliner-by-godrej-interio-sumo-2-seater-recliner-in-orang-b8neui.jpg",
            image2: "https://ii1.pepperfry.com/media/catalog/product/s/u/800x880/sumo-2-seater-recliner-in-orange-and-grey-recliner-by-godrej-interio-sumo-2-seater-recliner-in-orang-nnnqfs.jpg",
            image3: "https://ii1.pepperfry.com/media/catalog/product/s/u/800x880/sumo-2-seater-recliner-in-orange-and-grey-recliner-by-godrej-interio-sumo-2-seater-recliner-in-orang-mnpmfh.jpg",
            image4: "https://ii1.pepperfry.com/media/catalog/product/s/u/800x880/sumo-2-seater-recliner-in-orange-and-grey-recliner-by-godrej-interio-sumo-2-seater-recliner-in-orang-quwd8p.jpg",
            price:  "45,242",
            brand: "Godrej Interio",
            discount: "0",
            discount_price:"45,242",
        },
    
    
        {
            name: "Selino 2 Seater Faux Leather Manual Recliner in Cream Colour",
            subtype: "2SeaterRecliners",
            image1: "https://ii1.pepperfry.com/media/catalog/product/s/e/800x880/selino-2-seater-faux-leather-manual-recliner-in-cream-colour-by-lezino-selino-2-seater-faux-leather--zq2odh.jpg",
            image2: "https://ii1.pepperfry.com/media/catalog/product/s/e/800x880/selino-2-seater-faux-leather-manual-recliner-in-cream-colour-by-lezino-selino-2-seater-faux-leather--pmoikb.jpg",
            image3: "https://ii1.pepperfry.com/media/catalog/product/s/e/800x880/selino-2-seater-faux-leather-manual-recliner-in-cream-colour-by-lezino-selino-2-seater-faux-leather--2f1ou6.jpg",
            image4: "https://ii1.pepperfry.com/media/catalog/product/s/e/800x880/selino-2-seater-faux-leather-manual-recliner-in-cream-colour-by-lezino-selino-2-seater-faux-leather--ewhxoy.jpg",
            price:  "62,999",
            brand: "Lezino",
            discount: "3,150",
            discount_price:"59,849",
        },
    
    
    
        {
            name: "Orlando 2 Seater Recliner in Brown Colour",
            subtype: "2SeaterRecliners",
            image1: "https://ii1.pepperfry.com/media/catalog/product/o/r/800x880/orlando-2-seater-recliner-in-brown-colour-by-evok-orlando-2-seater-recliner-in-brown-colour-by-evok-zfocny.jpg",
            image2: "https://ii1.pepperfry.com/media/catalog/product/o/r/800x880/orlando-two-seater-sofa-in-light-brown-colur-by-evok-orlando-two-seater-sofa-in-light-brown-colur-by-muo7gv.jpg",
            image3: "https://ii1.pepperfry.com/media/catalog/product/o/r/800x880/orlando-two-seater-sofa-in-light-brown-colur-by-evok-orlando-two-seater-sofa-in-light-brown-colur-by-nlycx2.jpg",
            image4: "https://ii1.pepperfry.com/media/catalog/product/o/r/800x880/orlando-two-seater-sofa-in-light-brown-colur-by-evok-orlando-two-seater-sofa-in-light-brown-colur-by-gdfuiu.jpg",
            price:  "1,34,475",
            brand: "",
            discount: "63,975",
            discount_price:"70,500",
        },
    
    
        {
            name: "Zerodha 3 Seater Manual Recliner Sofa in Grey Colour",
            subtype: "3SeaterRecliners",
            image1: "https://ii1.pepperfry.com/media/catalog/product/z/e/800x880/zerodha-3-seater-manual-recliner-sofa-in-grey-colour-by-furnitech-zerodha-3-seater-manual-recliner-s-zhuypa.jpg",
            image2: "https://ii1.pepperfry.com/media/catalog/product/z/e/800x880/zerodha-3-seater-manual-recliner-sofa-in-grey-colour-by-furnitech-zerodha-3-seater-manual-recliner-s-zmklbr.jpg",
            image3: "https://ii1.pepperfry.com/media/catalog/product/z/e/800x880/zerodha-3-seater-manual-recliner-sofa-in-grey-colour-by-furnitech-zerodha-3-seater-manual-recliner-s-f4l79s.jpg",
            image4: "https://ii1.pepperfry.com/media/catalog/product/z/e/800x880/zerodha-3-seater-manual-recliner-sofa-in-grey-colour-by-furnitech-zerodha-3-seater-manual-recliner-s-pjvngx.jpg",
            price:  "1,22,999",
            brand: "Furnitech",
            discount: "49,841",
            discount_price:"73,158",
        },
    
    
        {
            name: "Jameson 3 Seater Recliner in Beige Colour",
            subtype: "3SeaterRecliners",
            image1: "https://ii1.pepperfry.com/media/catalog/product/j/a/568x284/jameson-3-seater-recliner-in-beige-colour-by-durian-jameson-3-seater-recliner-in-beige-colour-by-dur-6x1i0l.jpg",
            image2: "https://ii1.pepperfry.com/media/catalog/product/j/a/568x284/jameson-3-seater-manual-recliner-in-beige-colour-by-durian-jameson-3-seater-manual-recliner-in-beige-wk92ce.jpg",
            image3: "https://ii1.pepperfry.com/media/catalog/product/j/a/568x284/jameson-3-seater-recliner-in-beige-colour-by-durian-jameson-3-seater-recliner-in-beige-colour-by-dur-uxybpf.jpg",
            image4: "https://ii1.pepperfry.com/media/catalog/product/j/a/568x284/jameson-3-seater-manual-recliner-in-beige-colour-by-durian-jameson-3-seater-manual-recliner-in-beige-2lswph.jpg",
            price:  "1,75,200",
            brand: "Durian",
            discount: "70,080",
            discount_price:"1,05,120",
        },
    
    
        {
            name: "Laron 3 Seater Recliner in Light Grey Colour",
            subtype: "3SeaterRecliners",
            image1: "https://ii1.pepperfry.com/media/catalog/product/l/a/800x880/laron-3-seater--recliner-sofa--in-light-grey-colour-by-furny-laron-3-seater--recliner-sofa--in-light-bpihzk.jpg",
            image2: "https://ii1.pepperfry.com/media/catalog/product/l/a/800x880/laron-3-seater--recliner-sofa--in-light-grey-colour-by-furny-laron-3-seater--recliner-sofa--in-light-ql0p2d.jpg",
            image3: "https://ii1.pepperfry.com/media/catalog/product/l/a/800x880/laron-3-seater--recliner-sofa--in-light-grey-colour-by-furny-laron-3-seater--recliner-sofa--in-light-qss9jr.jpg",
            image4: "https://ii1.pepperfry.com/media/catalog/product/l/a/800x880/laron-3-seater--recliner-sofa--in-light-grey-colour-by-furny-laron-3-seater--recliner-sofa--in-light-gwhq8a.jpg",
            price:  "78,858",
            brand: "Furny",
            discount: "26,559",
            discount_price:"52,299",
        },
    
        {
            name: "Houston 3 Seater Recliner in Light Brown Colour",
            subtype: "3SeaterRecliners",
            image1: "https://ii1.pepperfry.com/media/catalog/product/h/o/800x880/houston-3-seater-recliner-in-light-brown-colour-by-evok-houston-3-seater-recliner-in-light-brown-col-arilon.jpg",
            image2: "https://ii1.pepperfry.com/media/catalog/product/h/o/800x880/houston-three-seater-sofa-in-light-brown-colur-by-evok-houston-three-seater-sofa-in-light-brown-colu-p3efko.jpg",
            image3: "https://ii1.pepperfry.com/media/catalog/product/h/o/800x880/houston-three-seater-sofa-in-light-brown-colur-by-evok-houston-three-seater-sofa-in-light-brown-colu-iy5lhh.jpg",
            image4: "https://ii1.pepperfry.com/media/catalog/product/h/o/800x880/houston-three-seater-sofa-in-light-brown-colur-by-evok-houston-three-seater-sofa-in-light-brown-colu-ghzkel.jpg",
            price:  "1,12,475",
            brand: "Evok",
            discount: "55,485",
            discount_price:"56,990",
        },
    
        {
            name: "Selino 3 Seater Manual Recliner In Brown Colour",
            subtype: "3SeaterRecliners",
            image1: "https://ii1.pepperfry.com/media/catalog/product/s/e/800x880/selino-3-seater-manual-recliner-in-brown-suede-fabric-selino-3-seater-manual-recliner-in-brown-suede-zxlp7t.jpg",
            image2: "https://ii1.pepperfry.com/media/catalog/product/s/e/800x880/selino-3-seater-manual-recliner-in-brown-suede-fabric-selino-3-seater-manual-recliner-in-brown-suede-ag8i65.jpg",
            image3: "https://ii1.pepperfry.com/media/catalog/product/s/e/800x880/selino-3-seater-manual-recliner-in-brown-suede-fabric-selino-3-seater-manual-recliner-in-brown-suede-6hp39b.jpg",
            image4: "https://ii1.pepperfry.com/media/catalog/product/s/e/800x880/selino-3-seater-manual-recliner-in-brown-suede-fabric-selino-3-seater-manual-recliner-in-brown-suede-mfot6r.jpg",
            price:  "97,099",
            brand: "Lezino",
            discount: "14,450",
            discount_price:"82,649",
        },
    
        {
            name: "Berlin 3 Seater Recilner in Brown Colour",
            subtype: "3SeaterRecliners",
            image1: "https://ii1.pepperfry.com/media/catalog/product/b/e/800x400/berlin-3-seater-recilner-in-brown-colour-by-home-centre-berlin-3-seater-recilner-in-brown-colour-by--2qesls.jpg",
            image2: "https://ii1.pepperfry.com/media/catalog/product/b/e/568x284/berlin-3-seater-recilner-in-brown-colour-by-home-centre-berlin-3-seater-recilner-in-brown-colour-by--0c2n4k.jpg",
            image3: "https://ii1.pepperfry.com/media/catalog/product/b/e/568x284/berlin-3-seater-recilner-in-brown-colour-by-home-centre-berlin-3-seater-recilner-in-brown-colour-by--jeoi1w.jpg",
            image4: "https://ii1.pepperfry.com/media/catalog/product/b/e/568x284/berlin-3-seater-recilner-in-brown-colour-by-home-centre-berlin-3-seater-recilner-in-brown-colour-by--bwg2rq.jpg",
            price:  "2,01,280",
            brand: "Home Centre",
            discount: "40,256",
            discount_price:"1,61,024",
        },
    
        {
            name: "Selino 3 Seater Faux Leather Manual Recliner in Cream Colour",
            subtype: "3SeaterRecliners",
            image1: "https://ii1.pepperfry.com/media/catalog/product/s/e/800x880/selino-3-seater-faux-leather-manual-recliner-in-cream-colour-by-lezino-selino-3-seater-faux-leather--hlbbub.jpg",
            image2: "https://ii1.pepperfry.com/media/catalog/product/s/e/800x880/selino-3-seater-faux-leather-manual-recliner-in-cream-colour-by-lezino-selino-3-seater-faux-leather--tgnjsc.jpg",
            image3: "https://ii1.pepperfry.com/media/catalog/product/s/e/800x880/selino-3-seater-faux-leather-manual-recliner-in-cream-colour-by-lezino-selino-3-seater-faux-leather--ddvw54.jpg",
            image4: "https://ii1.pepperfry.com/media/catalog/product/s/e/800x880/selino-3-seater-faux-leather-manual-recliner-in-cream-colour-by-lezino-selino-3-seater-faux-leather--orqhvp.jpg",
            price:  "90,999",
            brand: "Lezino",
            discount: "4,550",
            discount_price:"86,449",
        },
    
        {
            name: "Dawson 3 Seater Manual Recliner in Brown Colour",
            subtype: "3SeaterRecliners",
            image1: "https://ii1.pepperfry.com/media/catalog/product/d/a/800x400/dawson-3-seater-recilner-in-brown-colour-by-home-centre-dawson-3-seater-recilner-in-brown-colour-by--dkp2kf.jpg",
            image2: "https://ii1.pepperfry.com/media/catalog/product/d/a/568x284/dawson-3-seater-recilner-in-brown-colour-by-home-centre-dawson-3-seater-recilner-in-brown-colour-by--y4fp0q.jpg",
            image3: "https://ii1.pepperfry.com/media/catalog/product/d/a/568x284/dawson-3-seater-recilner-in-brown-colour-by-home-centre-dawson-3-seater-recilner-in-brown-colour-by--pz2xvv.jpg",
            image4: "https://ii1.pepperfry.com/media/catalog/product/d/a/568x284/dawson-3-seater-recilner-in-brown-colour-by-home-centre-dawson-3-seater-recilner-in-brown-colour-by--kp9owk.jpg",
            price:  "1,62,438",
            brand: "Home Centre",
            discount: "32,488",
            discount_price:"1,29,950",
        },
    
        {
            name: "Versatil Three Seater Motorised In Black Colour",
            subtype: "3SeaterRecliners",
            image1: "https://ii1.pepperfry.com/media/catalog/product/v/e/800x880/versatil-three-seater-motorised-in-black-colour-by-little-nap-versatil-three-seater-motorised-in-bla-e6uqkq.jpg",
            image2: "https://ii1.pepperfry.com/media/catalog/product/v/e/800x880/versatil-three-seater-motorised-in-black-colour-by-little-nap-versatil-three-seater-motorised-in-bla-gendc3.jpg",
            image3: "https://ii1.pepperfry.com/media/catalog/product/v/e/800x880/versatil-three-seater-motorised-in-black-colour-by-little-nap-versatil-three-seater-motorised-in-bla-d9am93.jpg",
            image4: "https://ii1.pepperfry.com/media/catalog/product/v/e/800x880/versatil-three-seater-motorised-in-black-colour-by-little-nap-versatil-three-seater-motorised-in-bla-hefxsd.jpg",
            price:  "1,09,633",
            brand: "Little Nap Designs",
            discount: "5,482",
            discount_price:" 1,04,151",
        },
    
        {
            name: "Sumo 3 Seater Recliner in Blue and Grey Recliner",
            subtype: "3SeaterRecliners",
            image1: "https://ii1.pepperfry.com/media/catalog/product/s/u/800x880/sumo-3-seater-recliner-in-blue-and-grey-recliner-by-godrej-interio-sumo-3-seater-recliner-in-blue-an-cwqejw.jpg",
            image2: "https://ii1.pepperfry.com/media/catalog/product/s/u/800x880/sumo-3-seater-recliner-in-blue-and-grey-recliner-by-godrej-interio-sumo-3-seater-recliner-in-blue-an-k8pni9.jpg",
            image3: "https://ii1.pepperfry.com/media/catalog/product/s/u/800x880/sumo-3-seater-recliner-in-blue-and-grey-recliner-by-godrej-interio-sumo-3-seater-recliner-in-blue-an-e4kay7.jpg",
            image4: "https://ii1.pepperfry.com/media/catalog/product/s/u/800x880/sumo-3-seater-recliner-in-blue-and-grey-recliner-by-godrej-interio-sumo-3-seater-recliner-in-blue-an-naaupp.jpg",
            price:  "64,380",
            brand: "Godrej Interio",
            discount: "0",
            discount_price:"64,380",
        },
    
    ]
    return sofaAndRecliners;
}

export default Database;