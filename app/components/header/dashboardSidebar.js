export default function DashbaordSidebar() {

    return (

        <>

            <div class="sidebar col-md-3 col-lg-2 p-0">
                <div class="offcanvas-md offcanvas-end" tabindex="-1" id="sidebarMenu" aria-labelledby="sidebarMenuLabel">
                    <div class="offcanvas-header">
                        <h5 class="offcanvas-title" id="sidebarMenuLabel">Company name</h5>
                        <button type="button" class="btn-close" data-bs-dismiss="offcanvas" data-bs-target="#sidebarMenu" aria-label="Close"></button>
                    </div>
                    <div class="offcanvas-body d-md-flex flex-column p-0 pt-lg-3 overflow-y-auto">
                        <h6 class="sidebar-heading d-flex justify-content-between align-items-center px-3 mt-4 mb-1 text-body-secondary text-uppercase">
                            <span id="dashboard_sidebar_header">DASHBOARD</span>
                            <a class="link-secondary" href="#" aria-label="Add a new report">

                            </a>
                        </h6>
                        <ul class="nav flex-column">
                            <li class="nav-item">
                                <a class="nav-link d-flex align-items-center gap-2" style={{ color: '#6A3CB5' }} href="#">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                                        <path d="M9.75 3.75H5.25C4.85218 3.75 4.47064 3.90804 4.18934 4.18934C3.90804 4.47064 3.75 4.85218 3.75 5.25V9.75C3.75 10.1478 3.90804 10.5294 4.18934 10.8107C4.47064 11.092 4.85218 11.25 5.25 11.25H9.75C10.1478 11.25 10.5294 11.092 10.8107 10.8107C11.092 10.5294 11.25 10.1478 11.25 9.75V5.25C11.25 4.85218 11.092 4.47064 10.8107 4.18934C10.5294 3.90804 10.1478 3.75 9.75 3.75ZM9.75 9.75H5.25V5.25H9.75V9.75ZM18.75 3.75H14.25C13.8522 3.75 13.4706 3.90804 13.1893 4.18934C12.908 4.47064 12.75 4.85218 12.75 5.25V9.75C12.75 10.1478 12.908 10.5294 13.1893 10.8107C13.4706 11.092 13.8522 11.25 14.25 11.25H18.75C19.1478 11.25 19.5294 11.092 19.8107 10.8107C20.092 10.5294 20.25 10.1478 20.25 9.75V5.25C20.25 4.85218 20.092 4.47064 19.8107 4.18934C19.5294 3.90804 19.1478 3.75 18.75 3.75ZM18.75 9.75H14.25V5.25H18.75V9.75ZM9.75 12.75H5.25C4.85218 12.75 4.47064 12.908 4.18934 13.1893C3.90804 13.4706 3.75 13.8522 3.75 14.25V18.75C3.75 19.1478 3.90804 19.5294 4.18934 19.8107C4.47064 20.092 4.85218 20.25 5.25 20.25H9.75C10.1478 20.25 10.5294 20.092 10.8107 19.8107C11.092 19.5294 11.25 19.1478 11.25 18.75V14.25C11.25 13.8522 11.092 13.4706 10.8107 13.1893C10.5294 12.908 10.1478 12.75 9.75 12.75ZM9.75 18.75H5.25V14.25H9.75V18.75ZM18.75 12.75H14.25C13.8522 12.75 13.4706 12.908 13.1893 13.1893C12.908 13.4706 12.75 13.8522 12.75 14.25V18.75C12.75 19.1478 12.908 19.5294 13.1893 19.8107C13.4706 20.092 13.8522 20.25 14.25 20.25H18.75C19.1478 20.25 19.5294 20.092 19.8107 19.8107C20.092 19.5294 20.25 19.1478 20.25 18.75V14.25C20.25 13.8522 20.092 13.4706 19.8107 13.1893C19.5294 12.908 19.1478 12.75 18.75 12.75ZM18.75 18.75H14.25V14.25H18.75V18.75Z" fill="#6A3CB5" />
                                    </svg>
                                    Dashboard
                                </a>
                            </li>

                            <li class="nav-item">
                                <a class="nav-link d-flex align-items-center gap-2 text-dark" href="#">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                                        <path d="M21.5156 10.5937L15.5691 8.43749L13.4062 2.48437C13.2997 2.1973 13.1078 1.94972 12.8565 1.77489C12.6051 1.60006 12.3062 1.50635 12 1.50635C11.6938 1.50635 11.3949 1.60006 11.1435 1.77489C10.8922 1.94972 10.7003 2.1973 10.5937 2.48437L8.43749 8.43093L2.48437 10.5937C2.1973 10.7003 1.94972 10.8922 1.77489 11.1435C1.60006 11.3949 1.50635 11.6938 1.50635 12C1.50635 12.3062 1.60006 12.6051 1.77489 12.8565C1.94972 13.1078 2.1973 13.2997 2.48437 13.4062L8.43093 15.5625L10.5937 21.5156C10.7003 21.8027 10.8922 22.0503 11.1435 22.2251C11.3949 22.3999 11.6938 22.4936 12 22.4936C12.3062 22.4936 12.6051 22.3999 12.8565 22.2251C13.1078 22.0503 13.2997 21.8027 13.4062 21.5156L15.5691 15.5681L21.5156 13.4062C21.8027 13.2997 22.0503 13.1078 22.2251 12.8565C22.3999 12.6051 22.4936 12.3062 22.4936 12C22.4936 11.6938 22.3999 11.3949 22.2251 11.1435C22.0503 10.8922 21.8027 10.7003 21.5156 10.5937ZM15.0534 14.1562C14.8482 14.2312 14.6618 14.3501 14.5074 14.5046C14.3529 14.659 14.234 14.8454 14.1591 15.0506L12 20.9906L9.84374 15.0534C9.76884 14.8474 9.64969 14.6603 9.49468 14.5053C9.33968 14.3503 9.15258 14.2311 8.94656 14.1562L3.00937 12L8.94656 9.84374C9.15258 9.76884 9.33968 9.64969 9.49468 9.49468C9.64969 9.33968 9.76884 9.15258 9.84374 8.94656L12 3.00937L14.1562 8.94656C14.2312 9.15177 14.3501 9.33814 14.5046 9.49262C14.659 9.64711 14.8454 9.76598 15.0506 9.84093L20.9878 11.9972L15.0534 14.1562Z" fill="#3D3D3D" />
                                    </svg>
                                    Events
                                </a>
                            </li>

                            <li class="nav-item">
                                <a class="nav-link d-flex align-items-center gap-2 text-dark" href="#">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                                        <path d="M15.75 12C15.75 12.1989 15.671 12.3897 15.5303 12.5303C15.3897 12.671 15.1989 12.75 15 12.75H9C8.80109 12.75 8.61032 12.671 8.46967 12.5303C8.32902 12.3897 8.25 12.1989 8.25 12C8.25 11.8011 8.32902 11.6103 8.46967 11.4697C8.61032 11.329 8.80109 11.25 9 11.25H15C15.1989 11.25 15.3897 11.329 15.5303 11.4697C15.671 11.6103 15.75 11.8011 15.75 12ZM15 14.25H9C8.80109 14.25 8.61032 14.329 8.46967 14.4697C8.32902 14.6103 8.25 14.8011 8.25 15C8.25 15.1989 8.32902 15.3897 8.46967 15.5303C8.61032 15.671 8.80109 15.75 9 15.75H15C15.1989 15.75 15.3897 15.671 15.5303 15.5303C15.671 15.3897 15.75 15.1989 15.75 15C15.75 14.8011 15.671 14.6103 15.5303 14.4697C15.3897 14.329 15.1989 14.25 15 14.25ZM20.25 4.5V18.75C20.25 19.5456 19.9339 20.3087 19.3713 20.8713C18.8087 21.4339 18.0456 21.75 17.25 21.75H6.75C5.95435 21.75 5.19129 21.4339 4.62868 20.8713C4.06607 20.3087 3.75 19.5456 3.75 18.75V4.5C3.75 4.10218 3.90804 3.72064 4.18934 3.43934C4.47064 3.15804 4.85218 3 5.25 3H6.75V2.25C6.75 2.05109 6.82902 1.86032 6.96967 1.71967C7.11032 1.57902 7.30109 1.5 7.5 1.5C7.69891 1.5 7.88968 1.57902 8.03033 1.71967C8.17098 1.86032 8.25 2.05109 8.25 2.25V3H11.25V2.25C11.25 2.05109 11.329 1.86032 11.4697 1.71967C11.6103 1.57902 11.8011 1.5 12 1.5C12.1989 1.5 12.3897 1.57902 12.5303 1.71967C12.671 1.86032 12.75 2.05109 12.75 2.25V3H15.75V2.25C15.75 2.05109 15.829 1.86032 15.9697 1.71967C16.1103 1.57902 16.3011 1.5 16.5 1.5C16.6989 1.5 16.8897 1.57902 17.0303 1.71967C17.171 1.86032 17.25 2.05109 17.25 2.25V3H18.75C19.1478 3 19.5294 3.15804 19.8107 3.43934C20.092 3.72064 20.25 4.10218 20.25 4.5ZM18.75 4.5H17.25V5.25C17.25 5.44891 17.171 5.63968 17.0303 5.78033C16.8897 5.92098 16.6989 6 16.5 6C16.3011 6 16.1103 5.92098 15.9697 5.78033C15.829 5.63968 15.75 5.44891 15.75 5.25V4.5H12.75V5.25C12.75 5.44891 12.671 5.63968 12.5303 5.78033C12.3897 5.92098 12.1989 6 12 6C11.8011 6 11.6103 5.92098 11.4697 5.78033C11.329 5.63968 11.25 5.44891 11.25 5.25V4.5H8.25V5.25C8.25 5.44891 8.17098 5.63968 8.03033 5.78033C7.88968 5.92098 7.69891 6 7.5 6C7.30109 6 7.11032 5.92098 6.96967 5.78033C6.82902 5.63968 6.75 5.44891 6.75 5.25V4.5H5.25V18.75C5.25 19.1478 5.40804 19.5294 5.68934 19.8107C5.97064 20.092 6.35218 20.25 6.75 20.25H17.25C17.6478 20.25 18.0294 20.092 18.3107 19.8107C18.592 19.5294 18.75 19.1478 18.75 18.75V4.5Z" fill="#3D3D3D" />
                                    </svg>
                                    Inventory
                                </a>
                            </li>

                            <li class="nav-item">
                                <a class="nav-link d-flex align-items-center gap-2 text-dark" href="#">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                                        <path d="M12 8.25C11.2583 8.25 10.5333 8.46993 9.91661 8.88199C9.29993 9.29404 8.81928 9.87971 8.53545 10.5649C8.25162 11.2502 8.17736 12.0042 8.32205 12.7316C8.46675 13.459 8.8239 14.1272 9.34835 14.6517C9.8728 15.1761 10.541 15.5333 11.2684 15.6779C11.9958 15.8226 12.7498 15.7484 13.4351 15.4645C14.1203 15.1807 14.706 14.7001 15.118 14.0834C15.5301 13.4667 15.75 12.7417 15.75 12C15.75 11.0054 15.3549 10.0516 14.6517 9.34835C13.9484 8.64509 12.9946 8.25 12 8.25ZM12 14.25C11.555 14.25 11.12 14.118 10.75 13.8708C10.38 13.6236 10.0916 13.2722 9.92127 12.861C9.75097 12.4499 9.70642 11.9975 9.79323 11.561C9.88005 11.1246 10.0943 10.7237 10.409 10.409C10.7237 10.0943 11.1246 9.88005 11.561 9.79323C11.9975 9.70642 12.4499 9.75097 12.861 9.92127C13.2722 10.0916 13.6236 10.38 13.8708 10.75C14.118 11.12 14.25 11.555 14.25 12C14.25 12.5967 14.0129 13.169 13.591 13.591C13.169 14.0129 12.5967 14.25 12 14.25ZM22.5 5.25H1.5C1.30109 5.25 1.11032 5.32902 0.96967 5.46967C0.829018 5.61032 0.75 5.80109 0.75 6V18C0.75 18.1989 0.829018 18.3897 0.96967 18.5303C1.11032 18.671 1.30109 18.75 1.5 18.75H22.5C22.6989 18.75 22.8897 18.671 23.0303 18.5303C23.171 18.3897 23.25 18.1989 23.25 18V6C23.25 5.80109 23.171 5.61032 23.0303 5.46967C22.8897 5.32902 22.6989 5.25 22.5 5.25ZM18.1547 17.25H5.84531C5.5935 16.3984 5.13263 15.6233 4.50467 14.9953C3.87671 14.3674 3.10162 13.9065 2.25 13.6547V10.3453C3.10162 10.0935 3.87671 9.63263 4.50467 9.00467C5.13263 8.37671 5.5935 7.60162 5.84531 6.75H18.1547C18.4065 7.60162 18.8674 8.37671 19.4953 9.00467C20.1233 9.63263 20.8984 10.0935 21.75 10.3453V13.6547C20.8984 13.9065 20.1233 14.3674 19.4953 14.9953C18.8674 15.6233 18.4065 16.3984 18.1547 17.25ZM21.75 8.75344C20.8504 8.36662 20.1334 7.64959 19.7466 6.75H21.75V8.75344ZM4.25344 6.75C3.86662 7.64959 3.14959 8.36662 2.25 8.75344V6.75H4.25344ZM2.25 15.2466C3.14959 15.6334 3.86662 16.3504 4.25344 17.25H2.25V15.2466ZM19.7466 17.25C20.1334 16.3504 20.8504 15.6334 21.75 15.2466V17.25H19.7466Z" fill="#3D3D3D" />
                                    </svg>
                                    Revenue
                                </a>
                            </li>

                        </ul>


                        <h6 class="sidebar-heading d-flex justify-content-between align-items-center px-3 mt-4 mb-1 text-body-secondary text-uppercase">
                            <span id="dashboard_sidebar_header">OTHERS</span>
                            <a class="link-secondary" href="#" aria-label="Add a new report">

                            </a>
                        </h6>
                        <ul class="nav flex-column mb-auto">
                            <li class="nav-item">
                                <a class="nav-link d-flex align-items-center gap-2 text-dark" href="#">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                                        <path d="M12 2.25C10.0716 2.25 8.18657 2.82183 6.58319 3.89317C4.97982 4.96451 3.73013 6.48726 2.99218 8.26884C2.25422 10.0504 2.06114 12.0108 2.43735 13.9021C2.81355 15.7934 3.74215 17.5307 5.10571 18.8943C6.46928 20.2579 8.20656 21.1865 10.0979 21.5627C11.9892 21.9389 13.9496 21.7458 15.7312 21.0078C17.5127 20.2699 19.0355 19.0202 20.1068 17.4168C21.1782 15.8134 21.75 13.9284 21.75 12C21.7473 9.41498 20.7192 6.93661 18.8913 5.10872C17.0634 3.28084 14.585 2.25273 12 2.25ZM15.6656 14.6053C16.2083 13.8449 16.4999 12.9341 16.4999 12C16.4999 11.0659 16.2083 10.155 15.6656 9.39469L18.3375 6.72375C19.5732 8.20427 20.2501 10.0715 20.2501 12C20.2501 13.9285 19.5732 15.7957 18.3375 17.2762L15.6656 14.6053ZM9 12C9 11.4067 9.17595 10.8266 9.5056 10.3333C9.83524 9.83994 10.3038 9.45542 10.852 9.22836C11.4001 9.0013 12.0033 8.94189 12.5853 9.05764C13.1672 9.1734 13.7018 9.45912 14.1213 9.87868C14.5409 10.2982 14.8266 10.8328 14.9424 11.4147C15.0581 11.9967 14.9987 12.5999 14.7716 13.1481C14.5446 13.6962 14.1601 14.1648 13.6667 14.4944C13.1734 14.8241 12.5933 15 12 15C11.2044 15 10.4413 14.6839 9.87868 14.1213C9.31607 13.5587 9 12.7956 9 12ZM17.2763 5.6625L14.6053 8.33438C13.845 7.79174 12.9341 7.50007 12 7.50007C11.0659 7.50007 10.1551 7.79174 9.39469 8.33438L6.72375 5.6625C8.20427 4.42678 10.0715 3.74991 12 3.74991C13.9285 3.74991 15.7957 4.42678 17.2763 5.6625ZM5.6625 6.72375L8.33438 9.39469C7.79175 10.155 7.50007 11.0659 7.50007 12C7.50007 12.9341 7.79175 13.8449 8.33438 14.6053L5.6625 17.2762C4.42678 15.7957 3.74991 13.9285 3.74991 12C3.74991 10.0715 4.42678 8.20427 5.6625 6.72375ZM6.72375 18.3375L9.39469 15.6656C10.1551 16.2083 11.0659 16.4999 12 16.4999C12.9341 16.4999 13.845 16.2083 14.6053 15.6656L17.2763 18.3375C15.7957 19.5732 13.9285 20.2501 12 20.2501C10.0715 20.2501 8.20427 19.5732 6.72375 18.3375Z" fill="#3D3D3D" />
                                    </svg>
                                    Help center
                                </a>
                            </li>
                        </ul>

                    </div>
                </div>
            </div>

        </>

    )

}