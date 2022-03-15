// window.onload = () => {

//     const LoadingLogoContainer = document.querySelector('.loading_logo_container');
//     console.log(LoadingLogoContainer);
//     LoadingLogoContainer.classList.add('loading_logo_container2');
// }

window.addEventListener('load', function () {
    const LoadingLogoContainer = document.querySelector('.loading_logo_container');
    console.log(LoadingLogoContainer);
    LoadingLogoContainer.classList.add('loading_logo_container2');
})









// 以下は、 プログレスバー。ライブラリより。

var bar = new ProgressBar.Line(progress_bar, {
    strokeWidth: 3,
    easing: 'easeInOut',
    duration: 1400,
    // プログレスバーの色
    color: '#718E7C',
    trailColor: '#eee',
    trailWidth: 1,
    svgStyle: {
        width: '100%',
        height: '100%'
    },
    text: {
        style: {
            // テキスト文字（○％）
            color: '#999',
            position: 'absolute',
            transform: 'translate(-50%,0%)',
            left: '50%',
            top: '30px',
            padding: 0,
            margin: 0,
        },
        autoStyleContainer: false
    },
    from: {
        color: '#FFEA82'
    },
    to: {
        color: '#ED6A5A'
    },
    step: (state, bar) => {
        bar.setText(Math.round(bar.value() * 100) + ' %');
    }
});
bar.animate(1.0); // Number from 0.0 to 1.0