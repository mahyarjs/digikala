const template = document.createElement("template");

template.innerHTML = `<link rel="stylesheet" href="Components/ProductPage/details.css">
<div class="container">

        <div class="image-icons">
            <div class="icons-product-img">
                <div class="icons">
                    <i class="bi bi-star"></i>
                    <i class="bi bi-share"></i>
                    <i class="bi bi-bell"></i>
                    <i class="bi bi-graph-up-arrow"></i>
                    <i class="bi bi-align-center"></i>
                    <i class="bi bi-list"></i>
                </div>
                <img src="" alt="" id="product-img">
            </div>

        </div>

        <div class="details">
            <div class="title">
                <p id="title-product"></p>
            </div>

            <div class="score-comments">
                <div class="score">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-star-fill" viewBox="0 0 16 16">
                        <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/>
                    </svg>
                    <span>5</span>
                </div>
                <div class="comments">
                    <span>0 دیدگاه</span>
                </div>
                <div class="question">
                    <span>0 پرسش</span>
                </div>
            </div>

            <div class="color">
                <span>رنگ :</span>
                <span>مشکی</span>
                <!-- <div class="color-circle"></div> -->
            </div>

            <div class="properties">
                <p id="properties">ویژگی‌ها</p>
                <div class="properties-box">
                    <div class="property">
                        <p>تایتل</p>
                        <p>موضوغ</p>
                    </div>
                    <div class="property">
                        <p>تایتل</p>
                        <p>موضوغ</p>
                    </div>
                    <div class="property">
                        <p>تایتل</p>
                        <p>موضوغ</p>
                    </div>
                </div>

                

                <div class="see-all-property">
                    <div class="see">
                        <span>
                            مشاهده تمام ویژگی‌ها
                        </span>
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-chevron-left" viewBox="0 0 16 16">
                            <path fill-rule="evenodd" d="M11.354 1.646a.5.5 0 0 1 0 .708L5.707 8l5.647 5.646a.5.5 0 0 1-.708.708l-6-6a.5.5 0 0 1 0-.708l6-6a.5.5 0 0 1 .708 0"/>
                        </svg>
                    </div>
                </div>
            </div>

            <div class="color moblie">
                <span>رنگ :</span>
                <span>مشکی</span>
            </div>

            <div class="resend">
                
                <p>
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-info-circle-fill" viewBox="0 0 16 16">
                        <path d="M8 16A8 8 0 1 0 8 0a8 8 0 0 0 0 16m.93-9.412-1 4.705c-.07.34.029.533.304.533.194 0 .487-.07.686-.246l-.088.416c-.287.346-.92.598-1.465.598-.703 0-1.002-.422-.808-1.319l.738-3.468c.064-.293.006-.399-.287-.47l-.451-.081.082-.381 2.29-.287zM8 5.5a1 1 0 1 1 0-2 1 1 0 0 1 0 2"/>
                    </svg>
                    درخواست مرجوع کردن کالا در گروه ماوس (موشواره) با دلیل "انصراف از خرید" تنها در صورتی قابل تایید است که کالا در شرایط اولیه باشد (در صورت پلمپ بودن، کالا نباید باز شده باشد).</p>
            </div>

            <div class="digi-plus">
                <div class="desc-p">
                    <p id="first">
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-star" viewBox="0 0 16 16">
                            <path d="M2.866 14.85c-.078.444.36.791.746.593l4.39-2.256 4.389 2.256c.386.198.824-.149.746-.592l-.83-4.73 3.522-3.356c.33-.314.16-.888-.282-.95l-4.898-.696L8.465.792a.513.513 0 0 0-.927 0L5.354 5.12l-4.898.696c-.441.062-.612.636-.283.95l3.523 3.356-.83 4.73zm4.905-2.767-3.686 1.894.694-3.957a.56.56 0 0 0-.163-.505L1.71 6.745l4.052-.576a.53.53 0 0 0 .393-.288L8 2.223l1.847 3.658a.53.53 0 0 0 .393.288l4.052.575-2.906 2.77a.56.56 0 0 0-.163.506l.694 3.957-3.686-1.894a.5.5 0 0 0-.461 0z"/>
                        </svg>
                        سال <span style="font-size: 18px;">رایگان</span> سفارش‌ها برای اعضای دیجی‌پلاس
                    </p>
                    <p id="lsast">
                        <svg xmlns="http://www.w3.org/2000/svg" width="6" height="6" fill="currentColor" class="bi bi-circle-fill" viewBox="0 0 16 16">
                            <circle cx="8" cy="8" r="8"/>
                        </svg>
                        ارسال فوری برای شهر تهران (رایگان)
                    </p>
                </div>
                <div class="subscribe">
                    <a href="">
                        خرید اشتراک
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-chevron-left" viewBox="0 0 16 16">
                            <path fill-rule="evenodd" d="M11.354 1.646a.5.5 0 0 1 0 .708L5.707 8l5.647 5.646a.5.5 0 0 1-.708.708l-6-6a.5.5 0 0 1 0-.708l6-6a.5.5 0 0 1 .708 0"/>
                        </svg>
                    </a>
                    <svg width="103" height="60" viewBox="0 0 103 60" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <g clip-path="url(#clip0_8551_116)">
                        <g style="mix-blend-mode:multiply" opacity="0.8">
                        <path d="M41.7398 39.8789V29.4333L38.6072 28.3893H33.3858L30.2533 29.4333V39.8789L19.0636 48.833V24.9278H13.9516V21.7319H13.3125V24.9278H11.3955V28.1237H9.47852V52.4124H11.3955H14.5906H19.0636H30.2533H31.297L32.8193 45.5604C33.1501 44.0704 34.4707 43.0108 35.9958 43.0108C37.5209 43.0108 38.8415 44.0704 39.1724 45.5604L40.6946 52.4124H41.7384H57.4011L41.7398 39.8789Z" fill="url(#paint0_linear_8551_116)"/>
                        <path d="M8.05672 10.866H7.70171V10.3689C7.70171 10.2907 7.63781 10.2268 7.55971 10.2268H7.06271V9.72968C7.06271 9.65156 6.99881 9.58764 6.92071 9.58764H6.4237C6.4237 9.02091 6.0545 8.54082 5.54471 8.37321L5.14569 0L4.74666 8.37321C4.23688 8.54082 3.86768 9.02091 3.86768 9.58764H3.37067C3.29257 9.58764 3.22867 9.65156 3.22867 9.72968V10.2268H2.73167C2.65356 10.2268 2.58966 10.2907 2.58966 10.3689V10.866H2.23466C2.11822 10.866 2.05148 10.9995 2.12106 11.0933L3.86768 13.4227V14.0619L3.22867 49.8557H2.41074C2.19916 49.8557 2.06284 50.0773 2.15656 50.2662L2.58966 51.1341V52.4125H7.70171V51.1341L8.13482 50.2662C8.22854 50.0773 8.09222 49.8557 7.88063 49.8557H7.06271L6.4237 14.0619V13.4227L8.17032 11.0933C8.2399 10.9995 8.17316 10.866 8.05672 10.866Z" fill="url(#paint1_linear_8551_116)"/>
                        <path d="M22.8774 14.0621C22.8887 13.9868 22.8958 13.9115 22.8958 13.8334C22.8958 12.9513 22.1801 12.2355 21.2983 12.2355C21.0782 12.2355 20.8695 12.2795 20.6778 12.3605C20.1666 11.4685 19.2052 10.8662 18.1033 10.8662C17.3862 10.8662 16.7273 11.1219 16.2147 11.5452C15.925 11.1347 15.4493 10.8662 14.9083 10.8662C14.0264 10.8662 13.3107 11.5821 13.3107 12.4642C13.3107 12.5522 13.3193 12.6374 13.3335 12.7212C13.2525 12.7028 13.1687 12.6928 13.0821 12.6928C12.4516 12.6928 11.9404 13.2042 11.9404 13.8348C11.9404 13.9129 11.9489 13.9897 11.9631 14.0635H22.8774V14.0621Z" fill="url(#paint2_linear_8551_116)"/>
                        <path d="M48.6751 11.2252C48.4806 11.2252 48.2988 11.2777 48.1426 11.3686C47.9438 10.7522 47.3673 10.3076 46.6857 10.3076C45.9246 10.3076 45.2927 10.8644 45.1748 11.5931C45.074 11.5547 44.9632 11.532 44.8482 11.532C44.4492 11.532 44.1098 11.7877 43.9834 12.1442H49.7345C49.6606 11.6243 49.2147 11.2252 48.6751 11.2252Z" fill="url(#paint3_linear_8551_116)"/>
                        <path d="M36.8634 19.7236C36.6689 19.7236 36.4928 19.8003 36.3622 19.9239C36.1761 19.5858 35.8169 19.3586 35.4036 19.3586C35.2744 19.3586 35.1509 19.3827 35.0359 19.4239C35.0373 19.4026 35.0387 19.3813 35.0387 19.3586C35.0387 18.5518 34.3841 17.897 33.5775 17.897C32.7709 17.897 32.1163 18.5518 32.1163 19.3586C31.5114 19.3586 31.0215 19.8486 31.0215 20.4537H37.5947C37.5933 20.0503 37.2667 19.7236 36.8634 19.7236Z" fill="url(#paint4_linear_8551_116)"/>
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M53.0466 43.4285L47.2985 40.2201V21.6115H47.9372V20.3281H45.3825V18.4031H38.9956V20.3281H37.7183V17.7614H36.4409V20.3281H34.5249V21.6115H35.1636V47.9203H30.0541V48.562H23.0286V18.4031H24.306V16.478L11.5323 21.6115V22.8948H12.8097V46.6369H9.61629V33.8034L-0.602612 30.595V33.8034H-2.51866V22.8948H-1.24129V20.9698H-2.51866H-10.8215V19.0447H-14.6536V20.9698H-15.931V22.8948H-14.6536V41.5035H-17.2083V26.1032H-16.5697V23.5365L-28.0659 25.4615V26.1032H-27.4272V49.8453H-28.7046V35.0867H-35.0914V44.7119H-41.4782V49.8453H-42.7556V25.4615H-42.1169V24.8199H-44.033V22.2531H-44.6716V20.9698H-45.3103V19.6864H-45.949V20.9698H-46.5877V22.2531H-47.2264V24.8199H-48.5037V22.8948H-49.1424V24.8199H-49.7811V20.9698H-50.4198V24.8199H-51.6971V25.4615H-51.0585V42.7869H-52.9745V40.2201L-60 37.0117V49.8453V52.412H53.1176V49.8453H53.0466V43.4285ZM-44.6715 26.7448H-44.0328V34.445H-44.6715V26.7448ZM21.1129 22.895H19.8355V26.1034H21.1129V22.895ZM19.8355 27.3864H21.1129V30.5948H19.8355V27.3864ZM21.1129 31.8784H19.8355V35.0868H21.1129V31.8784ZM19.8355 36.3699H21.1129V39.5783H19.8355V36.3699ZM21.1129 40.8619H19.8355V44.0703H21.1129V40.8619ZM17.2806 22.895H18.5579V26.1034H17.2806V22.895ZM18.5579 27.3864H17.2806V30.5948H18.5579V27.3864ZM17.2806 31.8784H18.5579V35.0868H17.2806V31.8784ZM18.5579 36.3699H17.2806V39.5783H18.5579V36.3699ZM17.2806 40.8619H18.5579V44.0703H17.2806V40.8619ZM16.003 22.895H14.7256V26.1034H16.003V22.895ZM14.7256 27.3864H16.003V30.5948H14.7256V27.3864ZM16.003 31.8784H14.7256V35.0868H16.003V31.8784ZM14.7256 36.3699H16.003V39.5783H14.7256V36.3699ZM16.003 40.8619H14.7256V44.0703H16.003V40.8619ZM-22.3175 27.3864H-21.6788V28.0281H-22.3175V27.3864ZM-21.6788 28.6702H-22.3175V29.3118H-21.6788V28.6702ZM-22.3175 29.9535H-21.6788V30.5951H-22.3175V29.9535ZM-21.6788 31.2368H-22.3175V31.8784H-21.6788V31.2368ZM-23.595 27.3864H-22.9563V28.0281H-23.595V27.3864ZM-22.9563 28.6702H-23.595V29.3118H-22.9563V28.6702ZM-23.595 29.9535H-22.9563V30.5951H-23.595V29.9535ZM-22.9563 31.2368H-23.595V31.8784H-22.9563V31.2368ZM-24.8718 27.3864H-24.2331V28.0281H-24.8718V27.3864ZM-24.2331 28.6702H-24.8718V29.3118H-24.2331V28.6702ZM-24.8718 29.9535H-24.2331V30.5951H-24.8718V29.9535ZM-24.2331 31.2368H-24.8718V31.8784H-24.2331V31.2368ZM-26.1499 27.3864H-25.5113V28.0281H-26.1499V27.3864ZM-25.5113 28.6702H-26.1499V29.3118H-25.5113V28.6702ZM-26.1499 29.9535H-25.5113V30.5951H-26.1499V29.9535ZM-25.5113 31.2368H-26.1499V31.8784H-25.5113V31.2368Z" fill="url(#paint5_linear_8551_116)"/>
                        </g>
                        <rect x="13.7236" y="40.4609" width="60.7556" height="8.45196" fill="black"/>
                        <ellipse cx="5.23061" cy="5.23217" rx="5.23061" ry="5.23217" transform="matrix(-1 0 0 1 38.27 43.6802)" fill="black"/>
                        <ellipse cx="5.23061" cy="5.23217" rx="5.23061" ry="5.23217" transform="matrix(-1 0 0 1 71.666 43.6802)" fill="black"/>
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M21.8252 53.9053H120V61.1498L21.8252 53.9053Z" fill="url(#paint6_linear_8551_116)"/>
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M64.2322 48.9124C63.199 48.9124 62.3359 48.1255 62.2407 47.0967L59.5409 17.9219L71.6625 18.1848C75.2405 18.2623 78.1006 21.1851 78.1006 24.764V45.9124C78.1006 47.5693 76.7574 48.9124 75.1006 48.9124H64.2322Z" fill="url(#paint7_linear_8551_116)"/>
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M27.0062 43.8065C28.697 44.8762 29.8198 46.7632 29.8198 48.9124C29.8198 48.9124 29.8198 48.9124 29.8198 48.9124H50.3395V48.9124C50.3395 45.5782 53.0416 42.8753 56.3749 42.8753C59.7081 42.8753 62.4102 45.5782 62.4102 48.9124V48.9124H67.2417V24.7639C67.2417 20.9852 64.1784 17.9219 60.3996 17.9219H32.2384C29.3487 17.9219 27.0062 20.2644 27.0062 23.154V43.8065Z" fill="url(#paint8_linear_8551_116)"/>
                        <g style="mix-blend-mode:overlay">
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M61.0792 17.9552L71.6621 18.1848C75.2401 18.2623 78.1002 21.1851 78.1002 24.764V45.9124C78.1002 47.5693 76.757 48.9124 75.1002 48.9124H64.2318C64.23 48.9124 64.2281 48.9124 64.2262 48.9124H62.4098V48.9124C62.4098 45.5782 59.7077 42.8753 56.3745 42.8753C53.0413 42.8753 50.3391 45.5782 50.3391 48.9124V48.9124H29.8194V48.9124C29.8194 46.7632 28.6966 44.8763 27.0059 43.8065V23.1541C27.0059 20.2644 29.3484 17.9219 32.238 17.9219L59.5405 17.9219L59.5411 17.9219H60.3993C60.6287 17.9219 60.8555 17.9332 61.0792 17.9552Z" fill="#B12BA4"/>
                        </g>
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M54.6003 28.5563H57.3161V26.7446H53.6938L53.588 26.7507C53.137 26.8032 52.7872 27.1872 52.7882 27.6525L52.8043 34.8992L52.8099 34.9983C52.8605 35.4541 53.249 35.8071 53.7179 35.803L57.3241 35.7709L57.308 33.9593L54.613 33.9832L54.6084 32.1787L56.3954 32.1797V30.368L54.6048 30.3671L54.6003 28.5563ZM57.3161 39.4258V37.6147H35.5825V39.4258H57.3161ZM48.2605 26.7446H51.8828V28.5563H49.167L49.1715 30.3671L50.9622 30.368V32.1797L49.1752 32.1787L49.1797 33.9832L51.8748 33.9593L51.8909 35.7709L48.2847 35.803C47.8157 35.8071 47.4273 35.4541 47.3766 34.9983L47.3711 34.8992L47.355 27.6525C47.3539 27.1872 47.7037 26.8032 48.1548 26.7507L48.2605 26.7446ZM37.3937 28.5563H40.1104V26.7446H36.4881L36.3825 26.7507C35.9321 26.803 35.5825 27.1859 35.5825 27.6505V35.803H37.3937V32.1787L39.1897 32.1797V30.368L37.3937 30.3671V28.5563ZM43.7328 26.7446C45.2332 26.7446 46.4495 27.9613 46.4495 29.4621C46.4495 30.3667 46.0077 31.168 45.3282 31.6619L45.1844 31.7584L45.2501 31.8265C45.9533 32.5888 46.3981 33.5933 46.4453 34.7007L46.4495 34.8972V35.803H44.6384V34.8972C44.6384 33.7769 43.9607 32.8149 42.993 32.3991L42.8272 32.3336V35.803H41.0161V27.6505C41.0161 27.1859 41.3657 26.803 41.8161 26.7507L41.9217 26.7446H43.7328ZM42.8269 28.5558H43.7324L43.838 28.5619C44.2884 28.6142 44.638 28.9969 44.638 29.4613C44.638 29.9615 44.2326 30.3669 43.7324 30.3669H42.8269V28.5558Z" fill="white"/>
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M11.7154 46.9122C11.7154 48.0167 12.6108 48.9122 13.7154 48.9122H17.7492C17.7494 45.5781 20.4514 42.8753 23.7845 42.8753C24.9686 42.8753 26.073 43.2164 27.0049 43.8056V23.1538C23.0206 23.1538 19.3382 25.2772 17.3424 28.7256L11.9844 37.983C11.8082 38.2875 11.7154 38.6331 11.7154 38.9849V46.9122Z" fill="url(#paint9_linear_8551_116)"/>
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M15.786 33.7323C15.4052 34.399 15.8865 35.2283 16.6543 35.2283H23.1855C23.7378 35.2283 24.1855 34.7806 24.1855 34.2283V27.7764C24.1855 27.2241 23.7378 26.7764 23.1855 26.7764H20.3401C19.9811 26.7764 19.6498 26.9687 19.4717 27.2803L15.786 33.7323Z" fill="white"/>
                        <ellipse cx="5.23061" cy="5.23217" rx="5.23061" ry="5.23217" transform="matrix(-1 0 0 1 62.4106 43.6802)" fill="black"/>
                        <ellipse cx="5.23061" cy="5.23217" rx="5.23061" ry="5.23217" transform="matrix(-1 0 0 1 29.8198 43.6802)" fill="black"/>
                        <ellipse cx="5.23062" cy="5.23217" rx="5.23062" ry="5.23217" transform="matrix(-1 0 0 1 61.6064 43.6802)" fill="#243560"/>
                        <ellipse cx="5.23062" cy="5.23217" rx="5.23062" ry="5.23217" transform="matrix(-1 0 0 1 29.0142 43.6802)" fill="#243560"/>
                        <ellipse cx="3.21884" cy="3.2198" rx="3.21884" ry="3.2198" transform="matrix(-1 0 0 1 59.5967 45.6924)" fill="#566CA2"/>
                        <ellipse cx="3.21884" cy="3.2198" rx="3.21884" ry="3.2198" transform="matrix(-1 0 0 1 27.0049 45.6924)" fill="#566CA2"/>
                        <path d="M11.7139 43.6802C11.7139 43.2358 12.0741 42.8755 12.5186 42.8755H15.1335C15.9114 42.8755 16.5421 43.5062 16.5421 44.2841C16.5421 45.0621 15.9114 45.6928 15.1335 45.6928H12.5186C12.0741 45.6928 11.7139 45.3325 11.7139 44.8881V43.6802Z" fill="#AAAAAA"/>
                        <path d="M10.9092 43.6802C10.9092 43.2358 11.2695 42.8755 11.7139 42.8755H14.3288C15.1068 42.8755 15.7374 43.5062 15.7374 44.2841C15.7374 45.0621 15.1068 45.6928 14.3288 45.6928H11.7139C11.2695 45.6928 10.9092 45.3325 10.9092 44.8881V43.6802Z" fill="#D8D8D8"/>
                        </g>
                        <defs>
                        <linearGradient id="paint0_linear_8551_116" x1="57.3315" y1="3.77461" x2="-46.6894" y2="3.77461" gradientUnits="userSpaceOnUse">
                        <stop stop-color="white"/>
                        <stop offset="0.5169" stop-color="#DBF0F2"/>
                        <stop offset="1" stop-color="white"/>
                        </linearGradient>
                        <linearGradient id="paint1_linear_8551_116" x1="57.3312" y1="-420.252" x2="-46.6898" y2="-420.252" gradientUnits="userSpaceOnUse">
                        <stop stop-color="white"/>
                        <stop offset="0.5169" stop-color="#DBF0F2"/>
                        <stop offset="1" stop-color="white"/>
                        </linearGradient>
                        <linearGradient id="paint2_linear_8551_116" x1="57.3312" y1="-2.71495" x2="-46.6898" y2="-2.71495" gradientUnits="userSpaceOnUse">
                        <stop stop-color="white"/>
                        <stop offset="0.5169" stop-color="#DBF0F2"/>
                        <stop offset="1" stop-color="white"/>
                        </linearGradient>
                        <linearGradient id="paint3_linear_8551_116" x1="57.3315" y1="-5.38372" x2="-46.6894" y2="-5.38372" gradientUnits="userSpaceOnUse">
                        <stop stop-color="white"/>
                        <stop offset="0.5169" stop-color="#DBF0F2"/>
                        <stop offset="1" stop-color="white"/>
                        </linearGradient>
                        <linearGradient id="paint4_linear_8551_116" x1="57.3315" y1="-1.0545" x2="-46.6895" y2="-1.0545" gradientUnits="userSpaceOnUse">
                        <stop stop-color="white"/>
                        <stop offset="0.5169" stop-color="#DBF0F2"/>
                        <stop offset="1" stop-color="white"/>
                        </linearGradient>
                        <linearGradient id="paint5_linear_8551_116" x1="53.4015" y1="16.4315" x2="-60.0089" y2="16.4315" gradientUnits="userSpaceOnUse">
                        <stop stop-color="white"/>
                        <stop offset="0.5117" stop-color="#9CBDCD"/>
                        <stop offset="1" stop-color="white"/>
                        </linearGradient>
                        <linearGradient id="paint6_linear_8551_116" x1="23.6991" y1="57.4584" x2="120" y2="57.4584" gradientUnits="userSpaceOnUse">
                        <stop stop-opacity="0.504152"/>
                        <stop offset="0.682602" stop-opacity="0.01"/>
                        </linearGradient>
                        <linearGradient id="paint7_linear_8551_116" x1="86.1477" y1="17.9219" x2="86.1477" y2="48.9124" gradientUnits="userSpaceOnUse">
                        <stop stop-color="#909090"/>
                        <stop offset="1" stop-color="#575757"/>
                        </linearGradient>
                        <linearGradient id="paint8_linear_8551_116" x1="67.2417" y1="48.9124" x2="37.2781" y2="10.0102" gradientUnits="userSpaceOnUse">
                        <stop stop-color="#818181"/>
                        <stop offset="0.41677" stop-color="#939393"/>
                        <stop offset="1" stop-color="#C7C7C7"/>
                        </linearGradient>
                        <linearGradient id="paint9_linear_8551_116" x1="17.8617" y1="46.7177" x2="12.6962" y2="27.6068" gradientUnits="userSpaceOnUse">
                        <stop offset="0.000245848" stop-color="#D69102"/>
                        <stop offset="0.207632" stop-color="#E69F00"/>
                        <stop offset="1" stop-color="#F3CB41"/>
                        </linearGradient>
                        <clipPath id="clip0_8551_116">
                        <rect width="102.857" height="60" fill="white"/>
                        </clipPath>
                        </defs>
                        </svg>
                </div>
            </div>

        </div>

        <div class="buy-container">
            <div class="buy-product">
                <div class="header">
                    <div class="salsepersons">
                        <p>فروشنده</p>
                    </div>
    
                    <div class="section">
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-shop" viewBox="0 0 16 16">
                            <path d="M2.97 1.35A1 1 0 0 1 3.73 1h8.54a1 1 0 0 1 .76.35l2.609 3.044A1.5 1.5 0 0 1 16 5.37v.255a2.375 2.375 0 0 1-4.25 1.458A2.37 2.37 0 0 1 9.875 8 2.37 2.37 0 0 1 8 7.083 2.37 2.37 0 0 1 6.125 8a2.37 2.37 0 0 1-1.875-.917A2.375 2.375 0 0 1 0 5.625V5.37a1.5 1.5 0 0 1 .361-.976zm1.78 4.275a1.375 1.375 0 0 0 2.75 0 .5.5 0 0 1 1 0 1.375 1.375 0 0 0 2.75 0 .5.5 0 0 1 1 0 1.375 1.375 0 1 0 2.75 0V5.37a.5.5 0 0 0-.12-.325L12.27 2H3.73L1.12 5.045A.5.5 0 0 0 1 5.37v.255a1.375 1.375 0 0 0 2.75 0 .5.5 0 0 1 1 0M1.5 8.5A.5.5 0 0 1 2 9v6h1v-5a1 1 0 0 1 1-1h3a1 1 0 0 1 1 1v5h6V9a.5.5 0 0 1 1 0v6h.5a.5.5 0 0 1 0 1H.5a.5.5 0 0 1 0-1H1V9a.5.5 0 0 1 .5-.5M4 15h3v-5H4zm5-5a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v3a1 1 0 0 1-1 1h-2a1 1 0 0 1-1-1zm3 0h-2v3h2z"/>
                        </svg>
                        <span>بخش پویا قم</span>
                        <span>منتخب</span>
                    </div>
    
                    <div class="satisfaction">
                        <div>
                            <p><span style="color: green;">95%</span> رضایت از کالا</p>
                            <p>عملکرد <span style="color: green;">عالی</span></p>
                        </div>
                    </div>
                </div>
    
                <div class="buy">
                    <div class="price">
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-info-circle" viewBox="0 0 16 16">
                            <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14m0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16"/>
                            <path d="m8.93 6.588-2.29.287-.082.38.45.083c.294.07.352.176.288.469l-.738 3.468c-.194.897.105 1.319.808 1.319.545 0 1.178-.252 1.465-.598l.088-.416c-.2.176-.492.246-.686.246-.275 0-.375-.193-.304-.533zM9 4.5a1 1 0 1 1-2 0 1 1 0 0 1 2 0"/>
                        </svg>
                        <p id="product-price"> 
                            <span id="t">تومان</span>
                        </p>
                    </div>
    
                    <div class="animation">
                        <div class="show-anm">
                            <div class="item a">
                                <span>
                                    در سبد خرید ۱۰۰+ نفر
                                </span>
                            </div>
                            <div class="item">
                                <span>
                                    ۵۰۰+ نفر بیش از ۲ بار این کالا را خریده‌اند
                                </span>
                            </div>
                            <div class="item" >
                                <span>
                                    بهترین قیمت در ۳۰ روز گذشته
                                </span>
                            </div>
                        </div>
                    </div>
    
                    <div class="btn">افزودن به سبد</div>
    
                    <div class="service">
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-shield" viewBox="0 0 16 16">
                            <path d="M5.338 1.59a61 61 0 0 0-2.837.856.48.48 0 0 0-.328.39c-.554 4.157.726 7.19 2.253 9.188a10.7 10.7 0 0 0 2.287 2.233c.346.244.652.42.893.533q.18.085.293.118a1 1 0 0 0 .101.025 1 1 0 0 0 .1-.025q.114-.034.294-.118c.24-.113.547-.29.893-.533a10.7 10.7 0 0 0 2.287-2.233c1.527-1.997 2.807-5.031 2.253-9.188a.48.48 0 0 0-.328-.39c-.651-.213-1.75-.56-2.837-.855C9.552 1.29 8.531 1.067 8 1.067c-.53 0-1.552.223-2.662.524zM5.072.56C6.157.265 7.31 0 8 0s1.843.265 2.928.56c1.11.3 2.229.655 2.887.87a1.54 1.54 0 0 1 1.044 1.262c.596 4.477-.787 7.795-2.465 9.99a11.8 11.8 0 0 1-2.517 2.453 7 7 0 0 1-1.048.625c-.28.132-.581.24-.829.24s-.548-.108-.829-.24a7 7 0 0 1-1.048-.625 11.8 11.8 0 0 1-2.517-2.453C1.928 10.487.545 7.169 1.141 2.692A1.54 1.54 0 0 1 2.185 1.43 63 63 0 0 1 5.072.56"/>
                        </svg>
                        <span>سرویس ویژه دیجی کالا: ۷ روز تضمین بازگشت کالا</span>
                    </div>
    
                </div>
    
                <div class="send-details">
                    <div class="send-digi-kala">
                        <svg style="color: red;" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-send" viewBox="0 0 16 16">
                            <path d="M15.854.146a.5.5 0 0 1 .11.54l-5.819 14.547a.75.75 0 0 1-1.329.124l-3.178-4.995L.643 7.184a.75.75 0 0 1 .124-1.33L15.314.037a.5.5 0 0 1 .54.11ZM6.636 10.07l2.761 4.338L14.13 2.576zm6.787-8.201L1.591 6.602l4.339 2.76z"/>
                        </svg>
                        <span>ارسال دیجی‌کالا</span>
                    </div>
                    <div class="send-today">
                        <svg style="color: blue;" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-alarm" viewBox="0 0 16 16">
                            <path d="M8.5 5.5a.5.5 0 0 0-1 0v3.362l-1.429 2.38a.5.5 0 1 0 .858.515l1.5-2.5A.5.5 0 0 0 8.5 9z"/>
                            <path d="M6.5 0a.5.5 0 0 0 0 1H7v1.07a7.001 7.001 0 0 0-3.273 12.474l-.602.602a.5.5 0 0 0 .707.708l.746-.746A6.97 6.97 0 0 0 8 16a6.97 6.97 0 0 0 3.422-.892l.746.746a.5.5 0 0 0 .707-.708l-.601-.602A7.001 7.001 0 0 0 9 2.07V1h.5a.5.5 0 0 0 0-1zm1.038 3.018a6 6 0 0 1 .924 0 6 6 0 1 1-.924 0M0 3.5c0 .753.333 1.429.86 1.887A8.04 8.04 0 0 1 4.387 1.86 2.5 2.5 0 0 0 0 3.5M13.5 1c-.753 0-1.429.333-1.887.86a8.04 8.04 0 0 1 3.527 3.527A2.5 2.5 0 0 0 13.5 1"/>
                        </svg>
                        <span>ارسال امروز (فعلا در شهر تهران و کرج)</span>
                    </div>
                </div>
    
                <div class="score-digi-kala">
                    <svg style="color: gold;" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-star-fill" viewBox="0 0 16 16">
                        <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/>
                    </svg>
                    <span>۲۰ امتیاز دیجی‌کلاب</span>
                    <svg style="color: gray;" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-info-circle" viewBox="0 0 16 16">
                        <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14m0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16"/>
                        <path d="m8.93 6.588-2.29.287-.082.38.45.083c.294.07.352.176.288.469l-.738 3.468c-.194.897.105 1.319.808 1.319.545 0 1.178-.252 1.465-.598l.088-.416c-.2.176-.492.246-.686.246-.275 0-.375-.193-.304-.533zM9 4.5a1 1 0 1 1-2 0 1 1 0 0 1 2 0"/>
                    </svg>
                </div>
    
            </div>

            <div class="pricing">
                <div class="f">
                    <svg xmlns="http://www.w3.org/2000/svg" width="13" height="13" fill="currentColor" class="bi bi-info-circle" viewBox="0 0 16 16">
                        <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14m0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16"/>
                        <path d="m8.93 6.588-2.29.287-.082.38.45.083c.294.07.352.176.288.469l-.738 3.468c-.194.897.105 1.319.808 1.319.545 0 1.178-.252 1.465-.598l.088-.416c-.2.176-.492.246-.686.246-.275 0-.375-.193-.304-.533zM9 4.5a1 1 0 1 1-2 0 1 1 0 0 1 2 0"/>
                    </svg>
                    <span>فرایند قمیت گذاری و نظارت بر قیمت</span>
                </div>
                <svg style="color: gray;" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-chevron-left" viewBox="0 0 16 16">
                    <path fill-rule="evenodd" d="M11.354 1.646a.5.5 0 0 1 0 .708L5.707 8l5.647 5.646a.5.5 0 0 1-.708.708l-6-6a.5.5 0 0 1 0-.708l6-6a.5.5 0 0 1 .708 0"/>
                </svg>
            </div>
        </div>

    </div>`;

class ProductDetials extends HTMLElement {
  constructor() {
    super();

    this.attachShadow({ mode: "open" });

    this.shadowRoot.append(template.content.cloneNode(true));

    this.productArray = [];
  }
  connectedCallback() {
    let url = new URLSearchParams(document.location.search);

    let getID = url.get("id");

    this.addToCart = this.shadowRoot.querySelector(".btn");

    this.isProductIncludesInAPI();

    fetch("https://api.digikala.com/v1/categories/apparel/")
      .then((res) => res.json())
      .then((item) => {
        let arr = item.data.incredible_offers.products;
        let findProduct = arr.find((i) => i.id == getID);

        this.setProductDetails(findProduct);
      });

    this.addToCart.addEventListener("click", () => {
      this.checkLogin();
    });
  }

  commafy(num) {
    var str = num.toString().split(".");
    if (str[0].length >= 5) {
      str[0] = str[0].replace(/(\d)(?=(\d{3})+$)/g, "$1,");
    }
    if (str[1] && str[1].length >= 5) {
      str[1] = str[1].replace(/(\d{3})/g, "$1 ");
    }
    return str.join(".");
  }

  setProductDetails(product) {
    let price = product.default_variant.price.rrp_price.toString().slice(0, -1);

    this.shadowRoot.getElementById("product-img").src =
      product.images.main.url[0];

    this.shadowRoot.getElementById("title-product").innerHTML =
      product.title_fa;

    this.shadowRoot
      .getElementById("product-price")
      .insertAdjacentHTML(
        "afterbegin",
        this.commafy(price.toString().slice(0, -1))
      );

    this.setDataObj = {
      id: product.id,
      name: product.title_fa,
      img: product.images.main.url[0],
      price,
      count: 1,
    };

  }

  async checkLogin() {
    if (document.cookie.includes("userID")) {
      let findIndexCookie = document.cookie.indexOf("=");

      let userID = document.cookie.slice(findIndexCookie + 1);

      let res = await fetch(
        "https://itsrealdatabase-default-rtdb.firebaseio.com/phone.json"
      );
      let jsonUser = await res.json();

      let arr = Object.entries(jsonUser);

      let findID = arr.find((i) => +userID === i[1].id);

      this.copyData = findID[1];

      this.postProductAPI(findID);
    } else {
      location.href = "http://127.0.0.1:5500/login.html";
    }
  }

  async postProductAPI(id) {
    let res = await fetch(
      `https://itsrealdatabase-default-rtdb.firebaseio.com/phone/${id[0]}/products.json`,
      {
        method: "POST",
        headers: {
          "Content-type": "application/json",
        },
        body: JSON.stringify(this.setDataObj),
      }
    );

    const main = document.querySelector("main");

    const modal = document.querySelector("site-modal");
    const modalImg = modal.shadowRoot.getElementById("modal-img");
    const modalDesc = modal.shadowRoot.getElementById("desc");
    
    modal.style.display = "block";

    main.style.filter = 'blur(5px)'

    modalImg.src = this.setDataObj.img

    modalDesc.innerHTML = this.setDataObj.name
    
    
    setTimeout(() => {
        modal.style.display = "none";
        main.style.filter = 'none'
    }, 3000);

    this.isProductIncludesInAPI();
  }

  async isProductIncludesInAPI() {
    if (document.cookie.includes("userID")) {
      let findIndexCookie = document.cookie.indexOf("=");

      let userID = document.cookie.slice(findIndexCookie + 1);

      let res = await fetch(
        "https://itsrealdatabase-default-rtdb.firebaseio.com/phone.json"
      );
      let jsonUser = await res.json();

      let arr = Object.entries(jsonUser);

      this.findID = arr.find((i) => +userID === i[1].id);
    }

    let url = new URLSearchParams(document.location.search);

    let getID = url.get("id");

    let res = await fetch(
      `https://itsrealdatabase-default-rtdb.firebaseio.com/phone/${this.findID[0]}.json`
    );
    let jsonUser = await res.json();

    let arr = Object.entries(jsonUser.products);

    let findProductsArray = arr;

    let isIncludes = findProductsArray.some((i) => i[1].id === +getID);

    if (isIncludes) {
      this.addToCart.innerHTML = `<a href="http://127.0.0.1:5500/basket.html">برو به سبد خرید</a>`;
      this.addToCart.classList.add("btn-active");
    }
  }
}

export { ProductDetials };
