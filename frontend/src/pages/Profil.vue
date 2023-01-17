<template>
    <div class="page-holder bg-gray-100">
        <!-- <header class="header bg-white shadow align-self-end py-3 px-xl-5 w-100">
            <div class="container-fluid">
              <div class="row">
                <div class="col-md-6 text-center text-md-start fw-bold">
                  <p class="mb-2 mb-md-0 fw-bold">Therichpost.com</p>
                </div>
                <div class="col-md-6 text-center text-md-end text-gray-400">
                  <p class="mb-0">Jassa</p>
                </div>
              </div>
            </div>
          </header> -->
        <div class="container-fluid px-lg-4 px-xl-5 contentDiv">
            <!-- Page Header-->
            <div class="page-header mb-4">
                <h1 class="page-heading">Profile</h1>
            </div>
            <section>
                <div class="row">
                    <div class="col-lg-4">
                        <div class="card mb-4">
                            <div class="card-body">
                                <div class="d-flex align-items-center">
                                    <div class="flex-shrink-0"><img class="avatar avatar-lg p-1"
                                            src="https://therichpost.com/wp-content/uploads/2021/03/avatar2.png"
                                            alt="Jassa Rich"></div>
                                    <div class="flex-grow-1 ps-3">
                                        <h4>Jassa Rich</h4>
                                        <p class="text-muted mb-0">Coder</p>
                                        <ul class="social-links list-inline mb-0 mt-2">
                                            <li class="list-inline-item"><a href="javascript:void(0)"
                                                    data-bs-toggle="tooltip" data-placement="top" title=""
                                                    data-bs-original-title="Nathan's Facebook"
                                                    aria-label="Nathan's Facebook"><i class="fab fa-facebook"></i></a>
                                            </li>
                                            <li class="list-inline-item"><a href="javascript:void(0)"
                                                    data-bs-toggle="tooltip" data-placement="top" title=""
                                                    data-bs-original-title="@nathan_andrews"
                                                    aria-label="@nathan_andrews"><i class="fab fa-twitter"></i></a></li>
                                            <li class="list-inline-item"><a href="javascript:void(0)"
                                                    data-bs-toggle="tooltip" data-placement="top" title=""
                                                    data-bs-original-title="+420777555987" aria-label="+420777555987"><i
                                                        class="fa fa-phone"></i></a></li>
                                            <li class="list-inline-item"><a href="javascript:void(0)"
                                                    data-bs-toggle="tooltip" data-placement="top" title=""
                                                    data-bs-original-title="@nathan" aria-label="@nathan"><i
                                                        class="fab fa-skype"></i></a></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col-lg-8">

                        <form class="card mb-4">
                            <div class="card-header">
                                <h4 class="card-heading">Edit Profile</h4>
                            </div>
                            <div class="card-body">
                                <div class="row">
                                    <div class="col-md-5">
                                        <div class="mb-4">
                                            <label class="form-label">Nom</label>
                                            <input class="form-control" type="text" placeholder="Company"
                                                value="Jassa Rich">
                                        </div>
                                    </div>
                                    <div class="col-sm-6 col-md-6">
                                        <div class="mb-4">
                                            <label class="form-label">Prénom</label>
                                            <input class="form-control" type="text" placeholder="First name">
                                        </div>
                                    </div>
                                    <div class="col-md-5">
                                        <div class="mb-4">
                                            <label class="form-label">Année</label>
                                            <select class="form-control custom-select">
                                                <option value="">1</option>
                                                <option value="">2</option>
                                                <option value="">3</option>
                                            </select>
                                        </div>
                                    </div>
                                    <div class="col-sm-6 col-md-4">
                                        <div class="mb-4">
                                            <label class="form-label">Email</label>
                                            <input class="form-control" type="text" placeholder="">
                                        </div>
                                    </div>
                                    <div class="col-sm-6 col-md-3">
                                        <div class="mb-4">
                                            <label class="form-label">Tél</label>
                                            <input class="form-control" type="number" placeholder="">
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="card-footer text-end">
                                <button class="btn btn-primary" type="submit">Modifié</button>
                            </div>
                        </form>
                    </div>
                </div>
            </section>
        </div>
    </div>
</template>



<script>
//importing bootstrap 5 Modules
import "bootstrap/dist/css/bootstrap.min.css";
export default {

}
</script>