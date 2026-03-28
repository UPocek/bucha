import drugaFermentacijaKorak1Image from '../public/images/kombuha_druga_fermentacija_korak1.png';
import post1Image from '../public/images/post1/sta-je-kombuha.webp';
import post10Image from '../public/images/post10/zdrava-kombuha.webp';
import post11Image from '../public/images/post11/nuspojave-kombuche.webp';
import post12Image from '../public/images/post12/kombuha-priprema.webp';
import post2Image from '../public/images/post2/kako-se-pravi-kombuha.webp';
import post3Image from '../public/images/post3/da-li-je-braon-boja-kombuhe-uredu.webp';
import post4Image from '../public/images/post4/mehurici-u-kombuhi.webp';
import post5Image from '../public/images/post5/zdravstveni-benefiti-kombuhe.webp';
import post6Image from '../public/images/post6/da-li-kombuha-sadrzi-alkohol.webp';
import post7Image from '../public/images/post7/kako-se-cuva-kombuha.webp';
import post8Image from '../public/images/post8/koliko-kombuhe-treba-piti.webp';
import post9Image from '../public/images/post9/kombuha-priprema.webp';
import pripremaKombuheKorak1Image from '../public/images/priprema-kombuhe-korak1.png';

const OG_IMAGE_METADATA = {
    '/images/kombuha_druga_fermentacija_korak1.png': drugaFermentacijaKorak1Image,
    '/images/post1/sta-je-kombuha.webp': post1Image,
    '/images/post10/zdrava-kombuha.webp': post10Image,
    '/images/post11/nuspojave-kombuche.webp': post11Image,
    '/images/post12/kombuha-priprema.webp': post12Image,
    '/images/post2/kako-se-pravi-kombuha.webp': post2Image,
    '/images/post3/da-li-je-braon-boja-kombuhe-uredu.webp': post3Image,
    '/images/post4/mehurici-u-kombuhi.webp': post4Image,
    '/images/post5/zdravstveni-benefiti-kombuhe.webp': post5Image,
    '/images/post6/da-li-kombuha-sadrzi-alkohol.webp': post6Image,
    '/images/post7/kako-se-cuva-kombuha.webp': post7Image,
    '/images/post8/koliko-kombuhe-treba-piti.webp': post8Image,
    '/images/post9/kombuha-priprema.webp': post9Image,
    '/images/priprema-kombuhe-korak1.png': pripremaKombuheKorak1Image,
};

function getImageMimeType(imagePath) {
    if (!imagePath) {
        return undefined;
    }

    if (imagePath.endsWith('.png')) {
        return 'image/png';
    }

    if (imagePath.endsWith('.webp')) {
        return 'image/webp';
    }

    if (imagePath.endsWith('.jpg') || imagePath.endsWith('.jpeg')) {
        return 'image/jpeg';
    }

    return undefined;
}

export function getOgImageMetadata(imagePath) {
    const metadata = OG_IMAGE_METADATA[imagePath];

    if (!metadata) {
        return null;
    }

    return {
        width: metadata.width,
        height: metadata.height,
        type: getImageMimeType(imagePath),
    };
}
