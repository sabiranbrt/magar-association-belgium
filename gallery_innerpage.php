<?php include 'common/header.php'; ?>
<?php include 'common/navigation.php'; ?>

<!-- banner common for all archieve pages -->

<div class="banner">
    <div class="image">
        <div class="banner-wrapper">
            <img src="assets/image/wall/wall.png" alt="">
            <div class="image_logo">
                <img src="assets/image/wall/wall-i.png" alt="">
            </div>
            <div class="image_logo">
                <img src="assets/image/wall/wall-i.png" alt="">
            </div>
        </div>
    </div>
    <div class="title">
        <p>Gallery</p>
    </div>
</div>


<div class="gallery_innerpage_wrapper">
    <section class="gallery">
        <div class="container">
            <div class="gallery_title">
                <div class="gallery_main_title">
                    <h3>Always try to do better for
                        humanity</h3>
                    <span class="primary_paragrpah"><i class="fa-solid fa-calendar me-2"></i>24th sep, 2024</span>
                </div>
            </div>

            <div class="gallery_wrapper">
                <div class="gallery_image gallery_video">
                    <div class="image">
                        <iframe id="videoFrame" src="assets/image/gallery/eye.mp4" allow="autoplay"> </iframe>
                    </div>
                </div>
                <div class="gallery_image" onclick="openModal();currentSlide(1)">
                    <div class="image">
                        <img src="assets/image/gallery/galleryall.png" alt="">
                    </div>
                </div>
                <div class="gallery_image" onclick="openModal();currentSlide(2)">
                    <div class="image">
                        <img src="assets/image/gallery/galleryall.png" alt="">
                    </div>
                </div>
                <div class="gallery_image" onclick="openModal();currentSlide(3)">
                    <div class="image">
                        <img src="assets/image/gallery/galleryall.png" alt="">
                    </div>
                </div>
                <div class="gallery_image" onclick="openModal();currentSlide(4)">
                    <div class="image">
                        <img src="assets/image/gallery/galleryall.png" alt="">
                    </div>
                </div>

                <!-- The Modal/Lightbox -->
                <div id="myModal" class="modal">
                    <span class="close cursor" onclick="closeModal()">&times;</span>
                    <div class="modal-content">

                        <div class="mySlides">
                            <img src="assets/image/gallery/galleryall.png" style="width:100%">
                        </div>

                        <div class="mySlides">

                            <img src="assets/image/gallery/galleryall.png" style="width:100%">
                        </div>

                        <div class="mySlides">

                            <img src="assets/image/gallery/galleryall.png" style="width:100%">
                        </div>

                        <div class="mySlides">
                            <img src="assets/image/gallery/galleryall.png" style="width:100%">
                        </div>

                        <!-- Next/previous controls -->
                        <a class="prev" onclick="plusSlides(-1)">&#10094;</a>
                        <a class="next" onclick="plusSlides(1)">&#10095;</a>
                    </div>
                </div>
            </div>
        </div>
    </section>
</div>

<?php include 'common/footer.php'; ?>