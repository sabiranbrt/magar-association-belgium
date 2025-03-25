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
        <p>ELECTION CANDIDATE FORM</p>
    </div>
</div>

<!-- registration section -->
<div class="registration_section">
    <div class="container">
        <!-- Form Begins -->
        <form action="#" class="form">
            <!-- Form item - Basic -->
            <div class="form-step form-step-active">
                <div class="box_shadow">
                    <div class="title">
                        <img src="assets/icon/infoicon.svg" />
                        <h1>Election Candidate Form </h1>
                    </div>
                    <div class="row mb-4">
                        <div class="flex-col col-6">
                            <label for="membernumber">Member Number</label>
                            <input type="text" name="membernumber" id="membernumber" placeholder="Enter Member Number " />
                        </div>
                        <div class="flex-col col-6">
                            <label for="passwordnumber">Password Number</label>
                            <input type="text" name="passwordnumber" id="passwordnumber" placeholder="Enter Password Number" />
                        </div>
                    </div>
                    <div class="row mb-4">
                        <div class="flex-col">
                            <label for="candidate">Candidate for</label>
                            <input type="text" name="candidate" id="candidate" placeholder="Select Candidate for" />
                        </div>
                    </div>
                    <div class="row mb-4">
                        <div class="flex-col">
                            <label for="bio">Short Bio</label>
                            <textarea name="bio" id="bio" placeholder="Write a Short Bio" rows="5" col="20"></textarea>
                        </div>
                    </div>
                </div>
            </div>
            <div class="mt-4">
                <a href="#" class="btn btn-next width-50 ml-auto">Vote</a>
            </div>
    </div>
    </form>
</div>

<?php include 'common/footer.php'; ?>