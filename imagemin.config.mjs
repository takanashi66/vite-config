import imagemin from 'imagemin-keep-folder';
import imageminMozjpeg from 'imagemin-mozjpeg';
import imageminPngquant from 'imagemin-pngquant';
import imageminWebp from 'imagemin-webp';
import imageminSvgo from 'imagemin-svgo';

(async () => {
    await imagemin(['resources/img/**/*.{jpg,png}'], {
        plugins: [
            imageminMozjpeg({ quality: 80 }),
            imageminPngquant({ quality: [0.65, 0.8] }),
        ],
        replaceOutputDir: output => {
            return output.replace(/img\//, '../public/common/img/')
        }
    });

    console.log('Images optimized');
})();

(async () => {
    await imagemin(['resources/img/**/*.{jpg,png}'], {
        plugins: [
            imageminWebp({
                quality: 50,
                metadata: "all"
            })
        ],
        replaceOutputDir: output => {
            return output.replace(/img\//, '../public/common/img/')
        }
    });

    console.log('webp optimized');
})();

(async () => {
    await imagemin(['resources/svg/**/*.svg'], {
        plugins: [
            imageminSvgo()
        ],
        replaceOutputDir: output => {
            return output.replace(/svg\//, '../public/common/svg/')
        }
    });

    console.log('SVG optimized');
})();
