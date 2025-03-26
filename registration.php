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
        <p>MEMBER REGISTRATION FORM</p>
    </div>
</div>

<!-- registration section -->
<div class="registration_section">
    <!-- Progress Bar  -->
    <div class="progressbar">
        <div class="progress" id="progress"></div>
        <div class="progress-step progress-step-active" data-title="Personal Details"></div>
        <div class="progress-step" data-title="Current Address"></div>
        <div class="progress-step" data-title="Nepal Address"></div>
    </div>
    <div class="container">
        <!-- Form Begins -->
        <form action="/file-upload" class="form">
            <!-- Form item - Basic -->
            <div class="form-step form-step-active">
                <div class="box_shadow">
                    <div class="title">
                        <img src="assets/icon/infoicon.svg" />
                        <h1>Personal Information</h1>
                    </div>
                    <div class="row mb-4">
                        <div class="flex-col col-md-6">
                            <label for="fullname">Full Name</label>
                            <input type="text" name="fullname" id="fullname" placeholder="Enter Full Name" />
                        </div>
                        <div class=" flex-col col-md-6">
                            <label for="dob">Date of Birth</label>
                            <input type="text" name="dob" id="dob" placeholder="Enter DOB" />
                        </div>
                    </div>
                    <div class="row mb-4">
                        <div class="flex-col col-md-5">
                            <label for="citizentype">Citizen Type</label>
                            <input type="text" name="citizentype" id="citizentype" placeholder="Enter Citizen Type" />
                        </div>
                        <div class="flex-col col-md-7">
                            <label for="profession">Profession</label>
                            <input type="text" name="profession" id="profession" placeholder="Enter Profession" />
                        </div>
                    </div>
                    <div class="row mb-4">
                        <div class="flex-col col-md-6">
                            <label for="contact">Contact Number</label>
                            <input type="text" name="contact" id="contact" placeholder="Enter Contact No." />
                        </div>
                        <div class="flex-col col-md-6">
                            <label for="email">Email Address</label>
                            <input type="text" name="email" id="email" placeholder="Enter Email" />
                        </div>
                    </div>
                    <!-- Dropzone File Upload -->
                    <div class="dropzone" id="kt_dropzonejs_example_1">
                        <div class="dz-message needsclick">
                            <div class="ms-4">
                                <h3 class="fs-5 fw-bold text-gray-900 mb-1">+ Upload Image</h3>
                            </div>
                        </div>
                    </div>

                </div>
                <div class="date">
                    <div class="d-flex">
                        <input type="checkbox" class="checkbox">
                        <p>If already member in Magar Sangh Belgium</p>
                    </div>
                    <div class="flex-col col-md-4 mt-4">
                        <label for="contact">Start Date</label>
                        <input type="date" name="date" id="date" placeholder="Select Date" />
                    </div>
                </div>
            </div>

            <div class="form-step">
                <div class="box_shadow">
                    <div class="title">
                        <img src="assets/icon/infoicon.svg" />
                        <h1>Current Address</h1>
                    </div>
                    <div class="row mb-4">
                        <div class="flex-col col-md-6">
                            <label for="fullname">Country</label>
                            <select name="country" id="country" aria-placeholder="Select Country">
                                <option value="" disabled selected>Select Country</option>
                                <option value="nepal">Nepal</option>
                                <option value="belgium">Belgium</option>
                                <option value="usa">USA</option>
                                <option value="uk">UK</option>
                            </select>
                        </div>
                        <div class="flex-col col-md-6">
                            <label for="state">State/Province/Region</label>
                            <select name="state" id="state" aria-placeholder="Select State/Province/Region">
                                <option value="" disabled selected>Select State/Province/Region</option>
                                <option value="one">Provience One</option>
                                <option value="two">Provience Two</option>
                            </select>
                        </div>
                    </div>
                    <div class="row mb-4">
                        <div class="flex-col col-md-5">
                            <label for="city">City</label>
                            <input type="text" name="city" id="city" placeholder="Select City" />
                        </div>
                        <div class="flex-col col-md-7">
                            <label for="address">Street Address</label>
                            <input type="text" name="address" id="address" placeholder="Enter Street Address" />
                        </div>
                    </div>
                    <div class="row mb-4">
                        <div class="flex-col col-md-7">
                            <label for="postalcode">ZIP/Postal Code</label>
                            <input type="text" name="postalcode" id="postalcode" placeholder="Enter ZIP/Postal Code" />
                        </div>
                    </div>
                </div>
            </div>
            <div class="form-step">
                <div class="box_shadow">
                    <div class="title">
                        <img src="assets/icon/infoicon.svg" />
                        <h1>Nepal Address</h1>
                    </div>
                    <div class="row mb-4">
                        <div class="flex-col col-md-6">
                            <label for="state">Province/Region</label>
                            <select name="state" id="state" aria-placeholder="Select Province/Region">
                                <option value="" disabled selected>Select Province/Region</option>
                                <option value="one">Provience One</option>
                                <option value="two">Provience Two</option>
                            </select>
                        </div>
                        <div class="flex-col col-md-6">
                            <label for="district">District</label>
                            <select name="district" id="district" aria-placeholder="Select District">
                                <option value="" disabled selected>Select District</option>
                                <option value="nepal">Morang</option>
                                <option value="belgium">Sunsari</option>
                                <option value="belgium">Jhapa</option>
                            </select>
                        </div>

                    </div>
                    <div class="row mb-4">
                        <div class="flex-col col-md-6">
                            <label for="municipality">Municipality/Rural Municipality</label>
                            <select name="municipality" id="municipality" aria-placeholder="Select Municipality/Rural Municipality ">
                                <option value="" disabled selected>Select Municipality/Rural Municipality </option>
                                <option value="nepal">Rampur</option>
                                <option value="nepal">Rampur</option>
                            </select>
                        </div>
                        <div class="flex-col col-md-6">
                            <label for="address">Street Address</label>
                            <input type="text" name="address" id="address" placeholder="Enter Street Address" />
                        </div>
                    </div>
                    <div class="row mb-4">
                        <div class="flex-col col-md-7">
                            <label for="postalcode">ZIP/Postal Code</label>
                            <input type="text" name="postalcode" id="postalcode" placeholder="Enter ZIP/Postal Code" />
                        </div>
                    </div>
                </div>
            </div>
            <div class="mt-4">
                <a href="#" class="btn btn-next width-50 ml-auto">Submit Now</a>
            </div>
    </div>
    </form>
</div>

</div>


<?php include 'common/footer.php'; ?>