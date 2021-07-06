<template>
    <div class="headerWrap">
        <div class="header" :class="{active: activeHeader}">
            <div class="top">
                <div class="phone" @click="setContactModal(true)">
                    <svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M20.2632 14.4853C18.9061 14.4853 17.5769 14.2734 16.317 13.8577C15.7022 13.6458 15.004 13.809 14.5999 14.2213L12.1023 16.1075C9.23653 14.5779 7.40243 12.745 5.89371 9.90001L7.72895 7.46148C8.19095 6.99948 8.35655 6.32325 8.15855 5.6899C7.73937 4.422 7.52634 3.09158 7.52634 1.73684C7.52634 0.779246 6.74709 0 5.7895 0H1.73684C0.779246 0 0 0.779246 0 1.73684C0 12.9094 9.09064 22 20.2632 22C21.2208 22 22 21.2208 22 20.2632V16.2221C22 15.2645 21.2208 14.4853 20.2632 14.4853Z" fill="#C4C4C4"/>
                    </svg>                
                </div>
                <div class="logo">
                    <img src="/img/Logo.png" alt="">
                </div>
                <div class="menu" @click="activeHeader = !activeHeader">
                    <span></span>
                    <span></span>
                </div>
            </div>
            <div class="bottom">
                <a href="#" class="confidential">Политика конфиденциальности</a>
                <div class="social">
                    <div class="icon">
                        <svg width="45" height="27" viewBox="0 0 45 27" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M22.0185 26.2298H24.7075C24.7075 26.2298 25.5203 26.1397 25.9338 25.6925C26.3163 25.2819 26.3023 24.5112 26.3023 24.5112C26.3023 24.5112 26.2488 20.9025 27.9252 20.3709C29.5763 19.8477 31.697 23.8586 33.9444 25.4028C35.6433 26.5701 36.9343 26.3141 36.9343 26.3141L42.945 26.2298C42.945 26.2298 46.0897 26.0357 44.5989 23.5633C44.478 23.3608 43.7298 21.735 40.1295 18.3935C36.3605 14.8945 36.8668 15.4627 41.4065 9.41256C44.1714 5.72792 45.2768 3.47775 44.9308 2.5158C44.6017 1.59886 42.5681 1.84075 42.5681 1.84075L35.8064 1.88013C35.8064 1.88013 35.3057 1.81262 34.9316 2.03483C34.5688 2.25422 34.3354 2.76051 34.3354 2.76051C34.3354 2.76051 33.2637 5.61259 31.8349 8.03715C28.8224 13.1535 27.6158 13.4235 27.1236 13.1057C25.9788 12.3659 26.2657 10.1298 26.2657 8.54344C26.2657 3.58463 27.0167 1.51729 24.8003 0.982874C24.0633 0.805674 23.5233 0.68754 21.6416 0.667851C19.2283 0.642537 17.1835 0.676289 16.0274 1.24164C15.2568 1.61855 14.6633 2.45955 15.0261 2.50736C15.4733 2.56643 16.4859 2.7802 17.0231 3.5115C17.7179 4.45376 17.6926 6.57454 17.6926 6.57454C17.6926 6.57454 18.092 12.4109 16.7616 13.1366C15.8474 13.6344 14.5958 12.6191 11.9096 7.97527C10.5342 5.59853 9.49352 2.96865 9.49352 2.96865C9.49352 2.96865 9.29381 2.47924 8.9366 2.21765C8.50344 1.89982 7.8959 1.79856 7.8959 1.79856L1.46605 1.83794C1.46605 1.83794 0.50129 1.86607 0.146889 2.28516C-0.168135 2.65925 0.121574 3.42993 0.121574 3.42993C0.121574 3.42993 5.15632 15.2067 10.8549 21.1444C16.0837 26.587 22.0185 26.2298 22.0185 26.2298Z" fill="#1E88E5"/>
                        </svg>                        
                    </div>
                    <div class="icon">
                        <svg width="45" height="45" viewBox="0 0 45 45" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M44.8647 13.2234C44.7552 10.8284 44.3748 9.19281 43.8186 7.76184C43.2539 6.26049 42.3681 4.90059 41.2234 3.77655C40.0998 2.63191 38.7395 1.7458 37.2382 1.18069C35.8068 0.624847 34.1716 0.244789 31.7766 0.135956C29.3771 0.0260925 28.6105 0 22.5 0C16.3895 0 15.6229 0.0260925 13.2234 0.135269C10.8284 0.244789 9.19315 0.625191 7.76184 1.18137C6.26049 1.74614 4.90059 2.63191 3.77655 3.77655C2.63191 4.90025 1.7458 6.26015 1.18069 7.7615C0.624847 9.19281 0.244789 10.8284 0.135956 13.2231C0.0260925 15.6229 0 16.3892 0 22.4997C0 28.6105 0.0260925 29.3771 0.135956 31.7766C0.245132 34.1713 0.625534 35.8068 1.18172 37.2382C1.74648 38.7392 2.63226 40.0994 3.77689 41.2231C4.90059 42.3677 6.26083 43.2535 7.76218 43.8183C9.19315 44.3748 10.8287 44.7549 13.2238 44.8644C15.6236 44.9739 16.3899 44.9997 22.5003 44.9997C28.6108 44.9997 29.3774 44.9739 31.7769 44.8644C34.1719 44.7549 35.8072 44.3748 37.2385 43.8183C40.2608 42.6496 42.65 40.2604 43.8186 37.2382C44.3752 35.8068 44.7552 34.1713 44.8647 31.7766C44.9739 29.3768 45 28.6105 45 22.5C45 16.3892 44.9739 15.6229 44.8647 13.2234ZM40.8146 31.5922C40.7146 33.786 40.348 34.9774 40.04 35.7701C39.283 37.7325 37.7322 39.2833 35.7698 40.0404C34.977 40.3483 33.7857 40.715 31.5919 40.8149C29.2199 40.9234 28.5081 40.946 22.5 40.946C16.4915 40.946 15.7801 40.9234 13.4078 40.8149C11.2143 40.715 10.023 40.3483 9.22989 40.0404C8.25279 39.6795 7.36874 39.1045 6.64295 38.357C5.89554 37.6313 5.32047 36.7476 4.95964 35.7701C4.65168 34.9774 4.28501 33.786 4.1851 31.5922C4.07696 29.2199 4.05396 28.5081 4.05396 22.5003C4.05396 16.4922 4.07696 15.7808 4.1851 13.4081C4.28535 11.2143 4.65168 10.023 4.95964 9.23023C5.32047 8.25279 5.89588 7.36874 6.64295 6.64295C7.36874 5.89554 8.25279 5.32047 9.23023 4.95998C10.023 4.65168 11.2143 4.28535 13.4081 4.1851C15.7805 4.07696 16.4922 4.05396 22.5 4.05396H22.4997C28.5075 4.05396 29.2192 4.07696 31.5919 4.18545C33.7857 4.28535 34.9767 4.65202 35.7698 4.95998C36.7469 5.32082 37.6309 5.89588 38.3567 6.64295C39.1041 7.36874 39.6792 8.25279 40.0397 9.23023C40.348 10.023 40.7146 11.2143 40.8146 13.4081C40.9227 15.7805 40.9457 16.4922 40.9457 22.5C40.9457 28.5081 40.923 29.2195 40.8146 31.5922Z" fill="url(#sadadw1231wedw)"/>
                            <path d="M22.4996 10.9458C16.1186 10.9458 10.9458 16.119 10.9458 22.5C10.9458 28.881 16.1186 34.0538 22.4996 34.0538C28.881 34.0538 34.0538 28.881 34.0538 22.5C34.0538 16.119 28.881 10.9458 22.4996 10.9458ZM22.4996 29.9999C18.3578 29.9995 14.9998 26.6418 15.0001 22.4996C15.0001 18.3578 18.3578 14.9998 22.5 14.9998C26.6422 15.0001 29.9999 18.3578 29.9999 22.4996C29.9999 26.6418 26.6418 29.9999 22.4996 29.9999Z" fill="url(#sadasdq1211w)"/>
                            <path d="M37.2102 10.4895C37.2102 11.9806 36.0013 13.1894 34.5103 13.1894C33.0189 13.1894 31.8101 11.9806 31.8101 10.4895C31.8101 8.99815 33.0189 7.78931 34.5103 7.78931C36.0013 7.78931 37.2102 8.99815 37.2102 10.4895Z" fill="url(#qw455tghuiuytr)"/>
                            <defs>
                                <linearGradient id="sadadw1231wedw" x1="3.77632" y1="41.2233" x2="41.2237" y2="3.77596" gradientUnits="userSpaceOnUse">
                                    <stop stop-color="#FFD600"/>
                                    <stop offset="0.5" stop-color="#FF0100"/>
                                    <stop offset="1" stop-color="#D800B9"/>
                                </linearGradient>
                                <linearGradient id="sadasdq1211w" x1="14.3299" y1="30.6697" x2="30.6698" y2="14.3299" gradientUnits="userSpaceOnUse">
                                    <stop stop-color="#FF6400"/>
                                    <stop offset="0.5" stop-color="#FF0100"/>
                                    <stop offset="1" stop-color="#FD0056"/>
                                </linearGradient>
                                <linearGradient id="qw455tghuiuytr" x1="32.601" y1="12.3985" x2="36.4193" y2="8.58023" gradientUnits="userSpaceOnUse">
                                    <stop stop-color="#F30072"/>
                                    <stop offset="1" stop-color="#E50097"/>
                                </linearGradient>
                            </defs>
                        </svg>                        
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import {mapMutations} from 'vuex';
import {SET_CONTACTS_MODAL} from '@/store/types.js';

const Header = {
    data: () => ({
        activeHeader: false
    }),
    methods: {
        ...mapMutations({
            setContactModal: SET_CONTACTS_MODAL
        })
    }
}
export default Header;
</script>

<style scoped>
.headerWrap{
    position: fixed;
    width: 100%;
    display: flex;
    justify-content: center;
    z-index: 5;
}
.header{
    width: 100%;
    height: 85px;
    background: #FFFFFF;
    box-shadow: 0px 4px 15px rgba(0, 0, 0, 0.1);
    border-radius: 0px 0px 25px 25px;
    padding-left: 25px;
    padding-right: 25px;
    top: 0;
    transition: .2s;
    overflow: hidden;
    z-index: 10;
    max-width: 1200px;
    margin: auto;
    position: relative;
}
.header.active{
    height: 310px;
}
.header .top{
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-top: 15px;
}
.header .logo{
    margin-top: -5px;
}
.header .menu{
    display: flex;
    flex-direction: column;
    height: 45px;
    width: 45px;
    display: flex;
    justify-content: center;
    align-items: flex-end;
    position: absolute;
    top: 15px;
    right: 25px;
}
.header .phone{
    height: 45px;
    width: 45px;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    position: absolute;
    top: 15px;
    left: 25px;
}
.header .menu span{
    width: 19px;
    height: 6px;
    background: #C4C4C4;
    border-radius: 10px;
}
.header .menu span:nth-child(2) {
    margin-top: 5px;
    width: 27px;
}
.header .bottom{
    margin-top: 50px;
    width: 100%;
}
.header .bottom .confidential{
    width: 100%;
    height: 72px;
    background: #F9F9F9;
    border-radius: 13px;
    display: flex;
    justify-content: center;
    align-items: center;
    font-family: Roboto;
    font-style: normal;
    font-weight: 500;
    font-size: 16px;
    line-height: 19px;
    display: flex;
    align-items: center;
    text-align: center;
    color: #201E1E;
}
.header .bottom .social{
    display: flex;
    justify-content: center;
    margin-top: 40px;
}
.header .bottom .social .icon{
    width: 45px;
    height: 45px;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-left: 17px;
    margin-right: 17px;
    cursor: pointer;
}
</style>