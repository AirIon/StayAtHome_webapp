let data = [];
    data.push ({
    photo: 'pics/01rom.jpg',
    title: 'Romanika',
    text: 'Román stílusnak vagy romanikának nevezzük az európai országok 11. és 12. századi műalkotásainak együttesét. A román kor az ezredforduló környékén kezdődött és a francia gótika elterjedéséig, a 13. század elejéig tartott. A román stílus elnevezés arra utal, hogy az új iskolák Róma ókori művészetéből merítettek. A római stílus, azaz „Le style roman” elnevezést a 19. század első felében, Franciaországban honosította meg Arcisse de Caumont művészettörténész, s ezt később a magyar művészettörténet a kifejezés tükörfordításával, román stílus néven örökítette át. A román stílus nem azonos a romániai stílusjegyekkel.'
    });
    data.push ({
    photo: 'pics/02got.jpg',
    title: 'Gótika',
    text: 'A gótika az érett középkor művészetének egyik irányzata, de megjelenésének technikai és társadalmi körülményeivel együtt történelmi korszaknak is tekinthető. Az elnevezést először pejoratív értelemben használták a reneszánsz korban, a sötétnek vélt középkor művészetét illették vele a fényesnek tartott antik művészettel szemben. Az akkori olaszokban mélyen élt a barbár pusztítások emléke, ezért goticó-nak, barbárnak mondták. Az elnevezést egyébként Giorgio Vasari óta használja a művészettörténet (csakúgy, mint az antikvitás kifejezést).'
    });
    data.push ({
    photo: 'pics/03ren.jpg',
    title: 'Reneszánsz',
    text: 'A reneszánsz (a francia renaissance a. m. újjászületés szóból) tudományos forradalmat, művészeti átalakulást, megújulást hozó, meghatározó kulturális mozgalom Európa újkori történelmének hajnalán. Egyben művelődéstörténeti és művészettörténeti korszak is, amely a középkor végét és az újkor elejét (korai újkor) felölelő átmeneti időszakra esik. A reneszánsz kezdetét Itáliában a 14. századra, Európa többi részén többnyire a 16. századra teszik. A reneszánsz stílus ezenkívül a művészettörténetben jellegzetes korstílust is jelöl.'
    });
    data.push ({
    photo: 'pics/04bar.jpg',
    title: 'Barokk',
    text: 'A barokk a reneszánsz után következő stílustörténeti korszak és korstílus, amely kb. 1575-től kb. 1770-ig tartott, és bonyolult minták, gazdag díszítés, monumentalitás jellemzők rá. Közvetlenül a manierizmusból fejlődött ki. A barokk késői ága a copf, ill. rokokó stílus. A barokkot követő korstílus a klasszicizmus. A barokk szó az olasz barocco kifejezésből ered, ami nyakatekert okoskodást jelent. Ez a barokkra jellemző túldíszítettségre és formai bravúrosságra utal. A barokk jelentős világnézeti fordulat a reneszánsz után. A barokk a teremtés tökéletességének vallásos emberi megfelelője. Innen ered a minden részlet kidolgozására kiterjedő emberi erőfeszítés, amelynek eredménye a barokk stílus. A barokk meghatározó stílusa volt Magyarországnak a török hódoltság után. A legfontosabb barokk városok Győr és Székesfehérvár, de jelentős barokk műemlékegyüttest találunk Budán, Veszprémben és Egerben is.'
    });
    data.push ({
    photo: 'pics/05kla.jpg',
    title: 'Klasszicizmus',
    text: `A klasszicizmus a 18. század második felétől a 19. század közepéig uralkodó stílustörténeti korszak és korstílus. Neve a latin classis szóból ered, melynek jelentése ’osztály’. Olyan művészeti irányzat, amely a múlt, főként az ókori görög-római alkotásokban megvalósuló eseményeket, szabályokat, hagyományokat tartja követendő példának. A 18. században mindenhonnan Rómába sereglettek a művészek, mert meg akarták ismerni az „antik világ”, vagyis az ókori görög és római kultúra fennmaradt emlékeit. Az ókor iránti érdeklődést fokozták a dél-itáliai romvárosokban (Pompeii, Herculaneum) 1748-ban kezdődött ásatások, valamint Johann Joachim Winckelmann porosz régész munkái. Európában az ókori, antik művészetet felelevenítő klasszicista stílus lett a divat. A francia forradalom és I. Napóleon idején teljesen eluralkodott és virágzott ez a stílus. A klasszicizmus szellemi hátterét a felvilágosodás korában kialakult polgári kultúra adta, amely természetességre, a jelenségek észszerű magyarázatára törekedett. Teljes diadalra a francia forradalom segítette, melynek vezetői előtt a görög demokrácia példája lebegett.`
    });
    data.push ({
    photo: 'pics/06rom.jpg',
    title: 'Romantika',
    text: 'A romantika egységes korstílus, ami több művészeti ágra együttesen terjedt ki. Kialakulásának időszaka a 18. század vége, virágkora a 19. század első fele, a század második felében a késő romantika és a romantikából kiinduló irányzatok voltak jelentősek. Elvesztették a felvilágosodás optimizmusát, jellemző az illúzióvesztés, kiábrándultság. Csalódnak a felvilágosodás eszméit megtagadó klasszikában, nem hozott megoldást a ráció, a hűvös ész sem. Eközben az egyházból is kiábrándultak. A romantika végét szokás Eugène Delacroix halálának időpontjával egyeztetni (19. század második fele).'
    })

let currentPhoto = 0;

$('#picture').attr('data-number', currentPhoto).attr('src',data[currentPhoto].photo);
$('#title').text(data[currentPhoto].title);
$('#text').text(data[currentPhoto].text);


let loadPhoto = (photoNumber) => {
    $('#picture').attr('src', data[photoNumber].photo);
    $('#title').text(data[photoNumber].title);
    $('#text').text(data[photoNumber].text);
}

loadPhoto[currentPhoto];

$('#right-arrow').click(() => {
    if (currentPhoto < 5) {
    currentPhoto++;
    loadPhoto(currentPhoto);
    }else{
    currentPhoto = 0;
    loadPhoto(currentPhoto);
    };
})

$('#left-arrow').click(() => {
    if (currentPhoto > 0) {
    currentPhoto--;
    loadPhoto(currentPhoto);
    }else{
    currentPhoto = 5;
    loadPhoto(currentPhoto);
    };
})

data.forEach((thumbnail, index) => {
    $('#thumbnails-container').append(`<img class="mini" id="thumb${index}" data-index="${index}" src="${thumbnail.photo}">`);
});

$('.mini').click((event) => {
    let indexClicked = $(event.target).attr('data-index');
    $('#picture').attr('src', data[indexClicked].photo);
    $('#title').text(data[indexClicked].title);
    $('#text').text(data[indexClicked].text);
});

$(`thumb${index}`).css("border", "1px solid blue")