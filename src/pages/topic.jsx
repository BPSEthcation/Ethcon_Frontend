import { Link } from "react-router-dom";
import Arrow from "../components/Arrow";
import "../style/topic.css";
import TopicBox from "../components/TopicBox";
import data from "../data.json";

const Topic = () => {
    return (
        <div className="overflow-y-auto">
            <div className="min-h-screen">
                <Link to="/">
                    <Arrow />
                </Link>
                <div className=" topic-textbox mt-[7px] mr-[40px] ml-[38px] h-[146px] mb-[55.36px]">
                    <svg
                        width="140"
                        height="141"
                        viewBox="0 0 140 141"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <rect y="1" width="140" height="140" fill="#D9D9D9" />
                    </svg>
                    <svg
                        width="197"
                        height="146"
                        viewBox="0 0 197 146"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <mask id="path-1-inside-1_153_5759" fill="white">
                            <path
                                fill-rule="evenodd"
                                clip-rule="evenodd"
                                d="M20.239 4.68629C15.5527 9.37258 15.5527 16.9151 15.5527 32V44.7806C15.4435 44.7772 15.3339 44.7766 15.224 44.7792C12.8381 44.8336 10.0783 47.5635 4.55851 53.0234C1.96609 55.5877 0.669886 56.8698 0.236024 58.3706C-0.0786747 59.4592 -0.0786747 60.6146 0.236024 61.7032C0.669886 63.204 1.96609 64.4861 4.55851 67.0504C10.0783 72.5103 12.8381 75.2402 15.224 75.2947C15.3339 75.2972 15.4435 75.2967 15.5527 75.2932V114C15.5527 129.085 15.5527 136.627 20.239 141.314C24.9253 146 32.4678 146 47.5527 146H161.389C176.474 146 184.017 146 188.703 141.314C193.389 136.627 193.389 129.085 193.389 114V32C193.389 16.9151 193.389 9.37258 188.703 4.68629C184.017 0 176.474 0 161.389 0H47.5527C32.4678 0 24.9253 0 20.239 4.68629Z"
                            />
                        </mask>
                        <path
                            fill-rule="evenodd"
                            clip-rule="evenodd"
                            d="M20.239 4.68629C15.5527 9.37258 15.5527 16.9151 15.5527 32V44.7806C15.4435 44.7772 15.3339 44.7766 15.224 44.7792C12.8381 44.8336 10.0783 47.5635 4.55851 53.0234C1.96609 55.5877 0.669886 56.8698 0.236024 58.3706C-0.0786747 59.4592 -0.0786747 60.6146 0.236024 61.7032C0.669886 63.204 1.96609 64.4861 4.55851 67.0504C10.0783 72.5103 12.8381 75.2402 15.224 75.2947C15.3339 75.2972 15.4435 75.2967 15.5527 75.2932V114C15.5527 129.085 15.5527 136.627 20.239 141.314C24.9253 146 32.4678 146 47.5527 146H161.389C176.474 146 184.017 146 188.703 141.314C193.389 136.627 193.389 129.085 193.389 114V32C193.389 16.9151 193.389 9.37258 188.703 4.68629C184.017 0 176.474 0 161.389 0H47.5527C32.4678 0 24.9253 0 20.239 4.68629Z"
                            fill="#FAFAFA"
                        />
                        <path
                            d="M20.239 4.68629L18.8248 3.27208V3.27208L20.239 4.68629ZM15.5527 44.7806L15.4889 46.7796L17.5527 46.8455V44.7806H15.5527ZM15.224 44.7792L15.1784 42.7797L15.1783 42.7797L15.224 44.7792ZM4.55851 53.0234L5.96499 54.4453L4.55851 53.0234ZM0.236024 58.3706L2.15735 58.926L0.236024 58.3706ZM0.236024 61.7032L2.15735 61.1478L0.236024 61.7032ZM4.55851 67.0504L3.15203 68.4723H3.15203L4.55851 67.0504ZM15.224 75.2947L15.2697 73.2952H15.2696L15.224 75.2947ZM15.5527 75.2932H17.5527V73.2283L15.4889 73.2942L15.5527 75.2932ZM20.239 141.314L18.8248 142.728H18.8248L20.239 141.314ZM188.703 141.314L187.289 139.899L188.703 141.314ZM188.703 4.68629L187.289 6.1005V6.10051L188.703 4.68629ZM17.5527 32C17.5527 24.401 17.557 18.9029 18.1207 14.7101C18.6766 10.5749 19.7436 8.01011 21.6532 6.1005L18.8248 3.27208C16.0481 6.04876 14.7719 9.59836 14.1563 14.1772C13.5485 18.6984 13.5527 24.5141 13.5527 32H17.5527ZM17.5527 44.7806V32H13.5527V44.7806H17.5527ZM15.2696 46.7786C15.3429 46.777 15.416 46.7773 15.4889 46.7796L15.6165 42.7817C15.4709 42.777 15.3248 42.7763 15.1784 42.7797L15.2696 46.7786ZM5.96499 54.4453C8.75514 51.6854 10.7453 49.7199 12.3322 48.4227C13.9715 47.0828 14.8003 46.7893 15.2696 46.7786L15.1783 42.7797C13.2618 42.8234 11.5177 43.9222 9.80068 45.3258C8.03123 46.7721 5.88162 48.9015 3.15203 51.6015L5.96499 54.4453ZM2.15735 58.926C2.26327 58.5596 2.49809 58.1151 3.11353 57.3889C3.74575 56.643 4.64339 55.7526 5.96499 54.4453L3.15203 51.6015C1.88121 52.8585 0.834541 53.8913 0.0620845 54.8027C-0.727143 55.7339 -1.35736 56.6808 -1.6853 57.8152L2.15735 58.926ZM2.15735 61.1478C1.94755 60.4221 1.94755 59.6518 2.15735 58.926L-1.6853 57.8152C-2.1049 59.2666 -2.1049 60.8072 -1.6853 62.2587L2.15735 61.1478ZM5.96498 65.6285C4.64339 64.3213 3.74575 63.4308 3.11353 62.6849C2.49809 61.9587 2.26327 61.5142 2.15735 61.1478L-1.6853 62.2587C-1.35736 63.393 -0.727144 64.3399 0.062084 65.2711C0.83454 66.1825 1.88121 67.2153 3.15203 68.4723L5.96498 65.6285ZM15.2696 73.2952C14.8003 73.2845 13.9715 72.9911 12.3322 71.6511C10.7453 70.3539 8.75514 68.3884 5.96498 65.6285L3.15203 68.4723C5.88162 71.1723 8.03123 73.3017 9.80068 74.7481C11.5177 76.1516 13.2618 77.2504 15.1784 77.2941L15.2696 73.2952ZM15.4889 73.2942C15.416 73.2965 15.3429 73.2969 15.2697 73.2952L15.1783 77.2941C15.3248 77.2975 15.471 77.2968 15.6165 77.2922L15.4889 73.2942ZM17.5527 114V75.2932H13.5527V114H17.5527ZM21.6532 139.899C19.7436 137.99 18.6766 135.425 18.1207 131.29C17.557 127.097 17.5527 121.599 17.5527 114H13.5527C13.5527 121.486 13.5485 127.302 14.1563 131.823C14.7719 136.402 16.0481 139.951 18.8248 142.728L21.6532 139.899ZM47.5527 144C39.9537 144 34.4556 143.996 30.2629 143.432C26.1276 142.876 23.5628 141.809 21.6532 139.899L18.8248 142.728C21.6015 145.505 25.1511 146.781 29.7299 147.396C34.2511 148.004 40.0668 148 47.5527 148V144ZM161.389 144H47.5527V148H161.389V144ZM187.289 139.899C185.379 141.809 182.814 142.876 178.679 143.432C174.486 143.996 168.988 144 161.389 144V148C168.875 148 174.691 148.004 179.212 147.396C183.791 146.781 187.341 145.505 190.117 142.728L187.289 139.899ZM191.389 114C191.389 121.599 191.385 127.097 190.821 131.29C190.265 135.425 189.198 137.99 187.289 139.899L190.117 142.728C192.894 139.951 194.17 136.402 194.786 131.823C195.394 127.302 195.389 121.486 195.389 114H191.389ZM191.389 32V114H195.389V32H191.389ZM187.289 6.10051C189.198 8.01011 190.265 10.5749 190.821 14.7101C191.385 18.9029 191.389 24.401 191.389 32H195.389C195.389 24.5141 195.394 18.6984 194.786 14.1772C194.17 9.59836 192.894 6.04876 190.117 3.27208L187.289 6.10051ZM161.389 2C168.988 2 174.486 2.00425 178.679 2.56795C182.814 3.12392 185.379 4.1909 187.289 6.1005L190.117 3.27208C187.341 0.495394 183.791 -0.780776 179.212 -1.39638C174.691 -2.00425 168.875 -2 161.389 -2V2ZM47.5527 2H161.389V-2H47.5527V2ZM21.6532 6.10051C23.5628 4.1909 26.1276 3.12392 30.2629 2.56795C34.4556 2.00425 39.9537 2 47.5527 2V-2C40.0668 -2 34.2511 -2.00425 29.7299 -1.39638C25.1511 -0.780775 21.6015 0.495394 18.8248 3.27208L21.6532 6.10051Z"
                            fill="#EEEEEE"
                            mask="url(#path-1-inside-1_153_5759)"
                        />
                        <path
                            d="M51.9854 47.5111C51.6254 47.5111 51.332 47.4244 51.1054 47.2511C50.892 47.0777 50.7187 46.8044 50.5854 46.4311L46.4054 34.6111C46.2587 34.1844 46.2854 33.8244 46.4854 33.5311C46.6987 33.2377 47.052 33.0911 47.5454 33.0911C47.9054 33.0911 48.1854 33.1777 48.3854 33.3511C48.5854 33.5111 48.7454 33.7711 48.8654 34.1311L52.4654 44.8111H51.6654L55.4254 34.1511C55.5587 33.7911 55.7254 33.5244 55.9254 33.3511C56.1254 33.1777 56.3854 33.0911 56.7054 33.0911C57.0254 33.0911 57.2787 33.1777 57.4654 33.3511C57.652 33.5244 57.812 33.7977 57.9454 34.1711L61.5854 44.8111H60.8854L64.5454 34.1311C64.6654 33.7844 64.8254 33.5244 65.0254 33.3511C65.2254 33.1777 65.4987 33.0911 65.8454 33.0911C66.272 33.0911 66.5854 33.2377 66.7854 33.5311C66.9854 33.8244 67.012 34.1844 66.8654 34.6111L62.6454 46.4511C62.512 46.8111 62.3387 47.0777 62.1254 47.2511C61.912 47.4244 61.6254 47.5111 61.2654 47.5111C60.9054 47.5111 60.6187 47.4244 60.4054 47.2511C60.192 47.0777 60.0187 46.8044 59.8854 46.4311L56.4054 36.5111H56.8654L53.3454 46.4511C53.212 46.8111 53.0387 47.0777 52.8254 47.2511C52.6254 47.4244 52.3454 47.5111 51.9854 47.5111ZM71.2871 47.5111C70.8871 47.5111 70.5804 47.4044 70.3671 47.1911C70.1537 46.9644 70.0471 46.6444 70.0471 46.2311V34.3511C70.0471 33.9377 70.1537 33.6244 70.3671 33.4111C70.5804 33.1977 70.8871 33.0911 71.2871 33.0911C71.6871 33.0911 71.9937 33.1977 72.2071 33.4111C72.4337 33.6244 72.5471 33.9377 72.5471 34.3511V39.5311H72.2671C72.5604 38.8244 73.0137 38.2911 73.6271 37.9311C74.2537 37.5577 74.9604 37.3711 75.7471 37.3711C76.5337 37.3711 77.1804 37.5177 77.6871 37.8111C78.1937 38.1044 78.5737 38.5511 78.8271 39.1511C79.0804 39.7377 79.2071 40.4844 79.2071 41.3911V46.2311C79.2071 46.6444 79.1004 46.9644 78.8871 47.1911C78.6737 47.4044 78.3671 47.5111 77.9671 47.5111C77.5671 47.5111 77.2537 47.4044 77.0271 47.1911C76.8137 46.9644 76.7071 46.6444 76.7071 46.2311V41.5111C76.7071 40.7511 76.5604 40.1977 76.2671 39.8511C75.9871 39.5044 75.5471 39.3311 74.9471 39.3311C74.2137 39.3311 73.6271 39.5644 73.1871 40.0311C72.7604 40.4844 72.5471 41.0911 72.5471 41.8511V46.2311C72.5471 47.0844 72.1271 47.5111 71.2871 47.5111ZM84.9663 47.5511C84.2596 47.5511 83.6263 47.4177 83.0663 47.1511C82.5196 46.8711 82.0863 46.4977 81.7663 46.0311C81.4596 45.5644 81.3063 45.0377 81.3063 44.4511C81.3063 43.7311 81.493 43.1644 81.8663 42.7511C82.2396 42.3244 82.8463 42.0177 83.6863 41.8311C84.5263 41.6444 85.653 41.5511 87.0663 41.5511H88.0663V42.9911H87.0863C86.2596 42.9911 85.5996 43.0311 85.1063 43.1111C84.613 43.1911 84.2596 43.3311 84.0463 43.5311C83.8463 43.7177 83.7463 43.9844 83.7463 44.3311C83.7463 44.7711 83.8996 45.1311 84.2063 45.4111C84.513 45.6911 84.9396 45.8311 85.4863 45.8311C85.9263 45.8311 86.313 45.7311 86.6463 45.5311C86.993 45.3177 87.2663 45.0311 87.4663 44.6711C87.6663 44.3111 87.7663 43.8977 87.7663 43.4311V41.1311C87.7663 40.4644 87.6196 39.9844 87.3263 39.6911C87.033 39.3977 86.5396 39.2511 85.8463 39.2511C85.4596 39.2511 85.0396 39.2977 84.5863 39.3911C84.1463 39.4844 83.6796 39.6444 83.1863 39.8711C82.933 39.9911 82.7063 40.0244 82.5063 39.9711C82.3196 39.9177 82.173 39.8111 82.0663 39.6511C81.9596 39.4777 81.9063 39.2911 81.9063 39.0911C81.9063 38.8911 81.9596 38.6977 82.0663 38.5111C82.173 38.3111 82.353 38.1644 82.6063 38.0711C83.2196 37.8177 83.8063 37.6377 84.3663 37.5311C84.9396 37.4244 85.4596 37.3711 85.9263 37.3711C86.8863 37.3711 87.673 37.5177 88.2863 37.8111C88.913 38.1044 89.3796 38.5511 89.6863 39.1511C89.993 39.7377 90.1463 40.4977 90.1463 41.4311V46.2311C90.1463 46.6444 90.0463 46.9644 89.8463 47.1911C89.6463 47.4044 89.3596 47.5111 88.9863 47.5111C88.613 47.5111 88.3196 47.4044 88.1063 47.1911C87.9063 46.9644 87.8063 46.6444 87.8063 46.2311V45.2711H87.9663C87.873 45.7377 87.6863 46.1444 87.4063 46.4911C87.1396 46.8244 86.7996 47.0844 86.3863 47.2711C85.973 47.4577 85.4996 47.5511 84.9663 47.5511ZM97.1638 47.5511C96.2971 47.5511 95.5705 47.4044 94.9838 47.1111C94.4105 46.8177 93.9838 46.3911 93.7038 45.8311C93.4238 45.2577 93.2838 44.5511 93.2838 43.7111V39.4511H92.2438C91.9238 39.4511 91.6771 39.3711 91.5038 39.2111C91.3305 39.0377 91.2438 38.8044 91.2438 38.5111C91.2438 38.2044 91.3305 37.9711 91.5038 37.8111C91.6771 37.6511 91.9238 37.5711 92.2438 37.5711H93.2838V35.7511C93.2838 35.3377 93.3905 35.0244 93.6038 34.8111C93.8305 34.5977 94.1438 34.4911 94.5438 34.4911C94.9438 34.4911 95.2505 34.5977 95.4638 34.8111C95.6771 35.0244 95.7838 35.3377 95.7838 35.7511V37.5711H97.9038C98.2238 37.5711 98.4705 37.6511 98.6438 37.8111C98.8171 37.9711 98.9038 38.2044 98.9038 38.5111C98.9038 38.8044 98.8171 39.0377 98.6438 39.2111C98.4705 39.3711 98.2238 39.4511 97.9038 39.4511H95.7838V43.5711C95.7838 44.2111 95.9238 44.6911 96.2038 45.0111C96.4838 45.3311 96.9371 45.4911 97.5638 45.4911C97.7905 45.4911 97.9905 45.4711 98.1638 45.4311C98.3371 45.3911 98.4905 45.3644 98.6238 45.3511C98.7838 45.3377 98.9171 45.3911 99.0238 45.5111C99.1305 45.6177 99.1838 45.8444 99.1838 46.1911C99.1838 46.4577 99.1371 46.6977 99.0438 46.9111C98.9638 47.1111 98.8105 47.2511 98.5838 47.3311C98.4105 47.3844 98.1838 47.4311 97.9038 47.4711C97.6238 47.5244 97.3771 47.5511 97.1638 47.5511ZM109.569 47.5111C109.236 47.5111 108.949 47.4311 108.709 47.2711C108.469 47.0977 108.276 46.8311 108.129 46.4711L105.229 39.0711C105.109 38.7511 105.069 38.4711 105.109 38.2311C105.163 37.9777 105.289 37.7777 105.489 37.6311C105.689 37.4844 105.956 37.4111 106.289 37.4111C106.583 37.4111 106.823 37.4844 107.009 37.6311C107.196 37.7644 107.356 38.0244 107.489 38.4111L109.909 45.0711H109.449L111.949 38.2511C112.056 37.9577 112.196 37.7444 112.369 37.6111C112.556 37.4777 112.796 37.4111 113.089 37.4111C113.383 37.4111 113.623 37.4844 113.809 37.6311C113.996 37.7644 114.136 37.9711 114.229 38.2511L116.689 45.0711H116.269L118.709 38.3511C118.843 37.9911 119.009 37.7444 119.209 37.6111C119.423 37.4777 119.656 37.4111 119.909 37.4111C120.229 37.4111 120.476 37.4911 120.649 37.6511C120.823 37.8111 120.923 38.0177 120.949 38.2711C120.976 38.5111 120.929 38.7777 120.809 39.0711L117.929 46.4711C117.796 46.8177 117.603 47.0777 117.349 47.2511C117.109 47.4244 116.823 47.5111 116.489 47.5111C116.156 47.5111 115.863 47.4244 115.609 47.2511C115.369 47.0777 115.183 46.8177 115.049 46.4711L112.429 39.5311H113.569L111.009 46.4511C110.876 46.8111 110.689 47.0777 110.449 47.2511C110.209 47.4244 109.916 47.5111 109.569 47.5111ZM127.105 47.5511C126.091 47.5511 125.211 47.3444 124.465 46.9311C123.718 46.5177 123.138 45.9311 122.725 45.1711C122.311 44.3977 122.105 43.4911 122.105 42.4511C122.105 41.6644 122.218 40.9644 122.445 40.3511C122.685 39.7244 123.025 39.1911 123.465 38.7511C123.905 38.2977 124.431 37.9577 125.045 37.7311C125.658 37.4911 126.345 37.3711 127.105 37.3711C128.118 37.3711 128.998 37.5777 129.745 37.9911C130.491 38.4044 131.071 38.9911 131.485 39.7511C131.898 40.5111 132.105 41.4111 132.105 42.4511C132.105 43.2377 131.985 43.9444 131.745 44.5711C131.518 45.1977 131.185 45.7377 130.745 46.1911C130.305 46.6311 129.778 46.9711 129.165 47.2111C128.551 47.4377 127.865 47.5511 127.105 47.5511ZM127.105 45.6511C127.598 45.6511 128.031 45.5311 128.405 45.2911C128.778 45.0511 129.065 44.6977 129.265 44.2311C129.478 43.7511 129.585 43.1577 129.585 42.4511C129.585 41.3844 129.358 40.5911 128.905 40.0711C128.451 39.5377 127.851 39.2711 127.105 39.2711C126.611 39.2711 126.178 39.3911 125.805 39.6311C125.431 39.8577 125.138 40.2111 124.925 40.6911C124.725 41.1577 124.625 41.7444 124.625 42.4511C124.625 43.5044 124.851 44.3044 125.305 44.8511C125.758 45.3844 126.358 45.6511 127.105 45.6511ZM137.708 47.5511C136.895 47.5511 136.221 47.4044 135.688 47.1111C135.155 46.8044 134.755 46.3511 134.488 45.7511C134.235 45.1511 134.108 44.4044 134.108 43.5111V38.6711C134.108 38.2444 134.215 37.9311 134.428 37.7311C134.641 37.5177 134.948 37.4111 135.348 37.4111C135.748 37.4111 136.055 37.5177 136.268 37.7311C136.495 37.9311 136.608 38.2444 136.608 38.6711V43.5511C136.608 44.2444 136.748 44.7577 137.028 45.0911C137.308 45.4244 137.755 45.5911 138.368 45.5911C139.035 45.5911 139.581 45.3644 140.008 44.9111C140.435 44.4444 140.648 43.8311 140.648 43.0711V38.6711C140.648 38.2444 140.755 37.9311 140.968 37.7311C141.181 37.5177 141.488 37.4111 141.888 37.4111C142.288 37.4111 142.595 37.5177 142.808 37.7311C143.035 37.9311 143.148 38.2444 143.148 38.6711V46.2311C143.148 47.0844 142.741 47.5111 141.928 47.5111C141.541 47.5111 141.241 47.4044 141.028 47.1911C140.815 46.9644 140.708 46.6444 140.708 46.2311V44.7111L140.988 45.3111C140.708 46.0311 140.281 46.5844 139.708 46.9711C139.148 47.3577 138.481 47.5511 137.708 47.5511ZM149.09 47.5511C147.984 47.5511 147.15 47.2377 146.59 46.6111C146.03 45.9711 145.75 45.0377 145.75 43.8111V34.3511C145.75 33.9377 145.857 33.6244 146.07 33.4111C146.284 33.1977 146.59 33.0911 146.99 33.0911C147.39 33.0911 147.697 33.1977 147.91 33.4111C148.137 33.6244 148.25 33.9377 148.25 34.3511V43.6911C148.25 44.3044 148.377 44.7577 148.63 45.0511C148.897 45.3444 149.27 45.4911 149.75 45.4911C149.857 45.4911 149.957 45.4911 150.05 45.4911C150.144 45.4777 150.237 45.4644 150.33 45.4511C150.517 45.4244 150.644 45.4777 150.71 45.6111C150.777 45.7311 150.81 45.9844 150.81 46.3711C150.81 46.7044 150.744 46.9644 150.61 47.1511C150.477 47.3377 150.257 47.4511 149.95 47.4911C149.817 47.5044 149.677 47.5177 149.53 47.5311C149.384 47.5444 149.237 47.5511 149.09 47.5511ZM155.799 47.5511C154.946 47.5511 154.193 47.3444 153.539 46.9311C152.899 46.5177 152.399 45.9311 152.039 45.1711C151.679 44.3977 151.499 43.4911 151.499 42.4511C151.499 41.3977 151.679 40.4977 152.039 39.7511C152.399 38.9911 152.899 38.4044 153.539 37.9911C154.193 37.5777 154.946 37.3711 155.799 37.3711C156.613 37.3711 157.319 37.5711 157.919 37.9711C158.533 38.3711 158.946 38.8977 159.159 39.5511H158.939V34.3511C158.939 33.9377 159.046 33.6244 159.259 33.4111C159.473 33.1977 159.779 33.0911 160.179 33.0911C160.579 33.0911 160.886 33.1977 161.099 33.4111C161.326 33.6244 161.439 33.9377 161.439 34.3511V46.2311C161.439 46.6444 161.333 46.9644 161.119 47.1911C160.906 47.4044 160.599 47.5111 160.199 47.5111C159.799 47.5111 159.493 47.4044 159.279 47.1911C159.066 46.9644 158.959 46.6444 158.959 46.2311V44.6711L159.179 45.2711C158.979 45.9644 158.573 46.5177 157.959 46.9311C157.346 47.3444 156.626 47.5511 155.799 47.5511ZM156.499 45.6511C156.993 45.6511 157.426 45.5311 157.799 45.2911C158.173 45.0511 158.459 44.6977 158.659 44.2311C158.873 43.7511 158.979 43.1577 158.979 42.4511C158.979 41.3844 158.753 40.5911 158.299 40.0711C157.846 39.5377 157.246 39.2711 156.499 39.2711C156.006 39.2711 155.573 39.3911 155.199 39.6311C154.826 39.8577 154.533 40.2111 154.319 40.6911C154.119 41.1577 154.019 41.7444 154.019 42.4511C154.019 43.5044 154.246 44.3044 154.699 44.8511C155.153 45.3844 155.753 45.6511 156.499 45.6511ZM49.2654 83.1111C48.972 83.1111 48.732 83.0311 48.5454 82.8711C48.3587 82.7244 48.2454 82.5244 48.2054 82.2711C48.1787 82.0177 48.2254 81.7511 48.3454 81.4711L49.7054 78.4511V79.4911L46.0654 71.0711C45.9454 70.7777 45.9054 70.5044 45.9454 70.2511C45.9854 69.9977 46.1054 69.7977 46.3054 69.6511C46.5187 69.4911 46.8054 69.4111 47.1654 69.4111C47.472 69.4111 47.7187 69.4844 47.9054 69.6311C48.092 69.7644 48.2587 70.0244 48.4054 70.4111L51.1054 77.1511H50.5054L53.2654 70.3911C53.412 70.0177 53.5854 69.7644 53.7854 69.6311C53.9854 69.4844 54.252 69.4111 54.5854 69.4111C54.8787 69.4111 55.112 69.4911 55.2854 69.6511C55.4587 69.7977 55.5654 69.9977 55.6054 70.2511C55.6454 70.4911 55.5987 70.7577 55.4654 71.0511L50.6054 82.1511C50.432 82.5244 50.2454 82.7777 50.0454 82.9111C49.8454 83.0444 49.5854 83.1111 49.2654 83.1111ZM61.5774 79.5511C60.564 79.5511 59.684 79.3444 58.9374 78.9311C58.1907 78.5177 57.6107 77.9311 57.1974 77.1711C56.784 76.3977 56.5774 75.4911 56.5774 74.4511C56.5774 73.6644 56.6907 72.9644 56.9174 72.3511C57.1574 71.7244 57.4974 71.1911 57.9374 70.7511C58.3774 70.2977 58.904 69.9577 59.5174 69.7311C60.1307 69.4911 60.8174 69.3711 61.5774 69.3711C62.5907 69.3711 63.4707 69.5777 64.2174 69.9911C64.964 70.4044 65.544 70.9911 65.9574 71.7511C66.3707 72.5111 66.5774 73.4111 66.5774 74.4511C66.5774 75.2377 66.4574 75.9444 66.2174 76.5711C65.9907 77.1977 65.6574 77.7377 65.2174 78.1911C64.7774 78.6311 64.2507 78.9711 63.6374 79.2111C63.0241 79.4377 62.3374 79.5511 61.5774 79.5511ZM61.5774 77.6511C62.0707 77.6511 62.504 77.5311 62.8774 77.2911C63.2507 77.0511 63.5374 76.6977 63.7374 76.2311C63.9507 75.7511 64.0574 75.1577 64.0574 74.4511C64.0574 73.3844 63.8307 72.5911 63.3774 72.0711C62.924 71.5377 62.324 71.2711 61.5774 71.2711C61.084 71.2711 60.6507 71.3911 60.2774 71.6311C59.904 71.8577 59.6107 72.2111 59.3974 72.6911C59.1974 73.1577 59.0974 73.7444 59.0974 74.4511C59.0974 75.5044 59.324 76.3044 59.7774 76.8511C60.2307 77.3844 60.8307 77.6511 61.5774 77.6511ZM72.1808 79.5511C71.3675 79.5511 70.6942 79.4044 70.1608 79.1111C69.6275 78.8044 69.2275 78.3511 68.9608 77.7511C68.7075 77.1511 68.5808 76.4044 68.5808 75.5111V70.6711C68.5808 70.2444 68.6875 69.9311 68.9008 69.7311C69.1142 69.5177 69.4208 69.4111 69.8208 69.4111C70.2208 69.4111 70.5275 69.5177 70.7408 69.7311C70.9675 69.9311 71.0808 70.2444 71.0808 70.6711V75.5511C71.0808 76.2444 71.2208 76.7577 71.5008 77.0911C71.7808 77.4244 72.2275 77.5911 72.8408 77.5911C73.5075 77.5911 74.0542 77.3644 74.4808 76.9111C74.9075 76.4444 75.1208 75.8311 75.1208 75.0711V70.6711C75.1208 70.2444 75.2275 69.9311 75.4408 69.7311C75.6542 69.5177 75.9608 69.4111 76.3608 69.4111C76.7608 69.4111 77.0675 69.5177 77.2808 69.7311C77.5075 69.9311 77.6208 70.2444 77.6208 70.6711V78.2311C77.6208 79.0844 77.2142 79.5111 76.4008 79.5111C76.0142 79.5111 75.7142 79.4044 75.5008 79.1911C75.2875 78.9644 75.1808 78.6444 75.1808 78.2311V76.7111L75.4608 77.3111C75.1808 78.0311 74.7542 78.5844 74.1808 78.9711C73.6208 79.3577 72.9542 79.5511 72.1808 79.5511ZM88.9925 79.5511C87.8859 79.5511 87.0525 79.2377 86.4925 78.6111C85.9325 77.9711 85.6525 77.0377 85.6525 75.8111V66.3511C85.6525 65.9377 85.7592 65.6244 85.9725 65.4111C86.1859 65.1977 86.4925 65.0911 86.8925 65.0911C87.2925 65.0911 87.5992 65.1977 87.8125 65.4111C88.0392 65.6244 88.1525 65.9377 88.1525 66.3511V75.6911C88.1525 76.3044 88.2792 76.7577 88.5325 77.0511C88.7992 77.3444 89.1725 77.4911 89.6525 77.4911C89.7592 77.4911 89.8592 77.4911 89.9525 77.4911C90.0459 77.4777 90.1392 77.4644 90.2325 77.4511C90.4192 77.4244 90.5459 77.4777 90.6125 77.6111C90.6792 77.7311 90.7125 77.9844 90.7125 78.3711C90.7125 78.7044 90.6459 78.9644 90.5125 79.1511C90.3792 79.3377 90.1592 79.4511 89.8525 79.4911C89.7192 79.5044 89.5792 79.5177 89.4325 79.5311C89.2859 79.5444 89.1392 79.5511 88.9925 79.5511ZM93.2793 79.4911C92.8793 79.4911 92.5726 79.3711 92.3593 79.1311C92.1459 78.8911 92.0393 78.5577 92.0393 78.1311V70.7911C92.0393 70.3511 92.1459 70.0177 92.3593 69.7911C92.5726 69.5511 92.8793 69.4311 93.2793 69.4311C93.6793 69.4311 93.9859 69.5511 94.1993 69.7911C94.4259 70.0177 94.5393 70.3511 94.5393 70.7911V78.1311C94.5393 78.5577 94.4326 78.8911 94.2193 79.1311C94.0059 79.3711 93.6926 79.4911 93.2793 79.4911ZM93.2793 67.5711C92.8126 67.5711 92.4459 67.4577 92.1793 67.2311C91.9259 66.9911 91.7993 66.6644 91.7993 66.2511C91.7993 65.8244 91.9259 65.4977 92.1793 65.2711C92.4459 65.0444 92.8126 64.9311 93.2793 64.9311C93.7593 64.9311 94.1259 65.0444 94.3793 65.2711C94.6326 65.4977 94.7593 65.8244 94.7593 66.2511C94.7593 66.6644 94.6326 66.9911 94.3793 67.2311C94.1259 67.4577 93.7593 67.5711 93.2793 67.5711ZM98.3769 79.5111C97.9769 79.5111 97.6702 79.4044 97.4569 79.1911C97.2436 78.9644 97.1369 78.6444 97.1369 78.2311V66.3511C97.1369 65.9377 97.2436 65.6244 97.4569 65.4111C97.6702 65.1977 97.9769 65.0911 98.3769 65.0911C98.7769 65.0911 99.0836 65.1977 99.2969 65.4111C99.5236 65.6244 99.6369 65.9377 99.6369 66.3511V73.7311H99.6769L102.977 70.2511C103.244 69.9844 103.477 69.7777 103.677 69.6311C103.877 69.4844 104.15 69.4111 104.497 69.4111C104.844 69.4111 105.104 69.5044 105.277 69.6911C105.464 69.8644 105.557 70.0777 105.557 70.3311C105.557 70.5844 105.437 70.8377 105.197 71.0911L101.717 74.7711V73.7311L105.537 77.8511C105.777 78.1044 105.884 78.3644 105.857 78.6311C105.844 78.8844 105.737 79.0977 105.537 79.2711C105.337 79.4311 105.084 79.5111 104.777 79.5111C104.404 79.5111 104.104 79.4377 103.877 79.2911C103.664 79.1444 103.424 78.9244 103.157 78.6311L99.6769 74.9911H99.6369V78.2311C99.6369 79.0844 99.2169 79.5111 98.3769 79.5111ZM112.484 79.5511C111.378 79.5511 110.424 79.3444 109.624 78.9311C108.824 78.5177 108.204 77.9311 107.764 77.1711C107.338 76.4111 107.124 75.5111 107.124 74.4711C107.124 73.4577 107.331 72.5711 107.744 71.8111C108.171 71.0511 108.751 70.4577 109.484 70.0311C110.231 69.5911 111.078 69.3711 112.024 69.3711C112.718 69.3711 113.338 69.4844 113.884 69.7111C114.444 69.9377 114.918 70.2644 115.304 70.6911C115.704 71.1177 116.004 71.6377 116.204 72.2511C116.418 72.8511 116.524 73.5311 116.524 74.2911C116.524 74.5311 116.438 74.7177 116.264 74.8511C116.104 74.9711 115.871 75.0311 115.564 75.0311H109.144V73.5911H114.764L114.444 73.8911C114.444 73.2777 114.351 72.7644 114.164 72.3511C113.991 71.9377 113.731 71.6244 113.384 71.4111C113.051 71.1844 112.631 71.0711 112.124 71.0711C111.564 71.0711 111.084 71.2044 110.684 71.4711C110.298 71.7244 109.998 72.0911 109.784 72.5711C109.584 73.0377 109.484 73.5977 109.484 74.2511V74.3911C109.484 75.4844 109.738 76.3044 110.244 76.8511C110.764 77.3844 111.524 77.6511 112.524 77.6511C112.871 77.6511 113.258 77.6111 113.684 77.5311C114.124 77.4377 114.538 77.2844 114.924 77.0711C115.204 76.9111 115.451 76.8444 115.664 76.8711C115.878 76.8844 116.044 76.9577 116.164 77.0911C116.298 77.2244 116.378 77.3911 116.404 77.5911C116.431 77.7777 116.391 77.9711 116.284 78.1711C116.191 78.3711 116.024 78.5444 115.784 78.6911C115.318 78.9844 114.778 79.2044 114.164 79.3511C113.564 79.4844 113.004 79.5511 112.484 79.5511ZM128.414 79.5511C127.547 79.5511 126.82 79.4044 126.234 79.1111C125.66 78.8177 125.234 78.3911 124.954 77.8311C124.674 77.2577 124.534 76.5511 124.534 75.7111V71.4511H123.494C123.174 71.4511 122.927 71.3711 122.754 71.2111C122.58 71.0377 122.494 70.8044 122.494 70.5111C122.494 70.2044 122.58 69.9711 122.754 69.8111C122.927 69.6511 123.174 69.5711 123.494 69.5711H124.534V67.7511C124.534 67.3377 124.64 67.0244 124.854 66.8111C125.08 66.5977 125.394 66.4911 125.794 66.4911C126.194 66.4911 126.5 66.5977 126.714 66.8111C126.927 67.0244 127.034 67.3377 127.034 67.7511V69.5711H129.154C129.474 69.5711 129.72 69.6511 129.894 69.8111C130.067 69.9711 130.154 70.2044 130.154 70.5111C130.154 70.8044 130.067 71.0377 129.894 71.2111C129.72 71.3711 129.474 71.4511 129.154 71.4511H127.034V75.5711C127.034 76.2111 127.174 76.6911 127.454 77.0111C127.734 77.3311 128.187 77.4911 128.814 77.4911C129.04 77.4911 129.24 77.4711 129.414 77.4311C129.587 77.3911 129.74 77.3644 129.874 77.3511C130.034 77.3377 130.167 77.3911 130.274 77.5111C130.38 77.6177 130.434 77.8444 130.434 78.1911C130.434 78.4577 130.387 78.6977 130.294 78.9111C130.214 79.1111 130.06 79.2511 129.834 79.3311C129.66 79.3844 129.434 79.4311 129.154 79.4711C128.874 79.5244 128.627 79.5511 128.414 79.5511ZM135.972 79.5511C134.959 79.5511 134.079 79.3444 133.332 78.9311C132.585 78.5177 132.005 77.9311 131.592 77.1711C131.179 76.3977 130.972 75.4911 130.972 74.4511C130.972 73.6644 131.085 72.9644 131.312 72.3511C131.552 71.7244 131.892 71.1911 132.332 70.7511C132.772 70.2977 133.299 69.9577 133.912 69.7311C134.525 69.4911 135.212 69.3711 135.972 69.3711C136.985 69.3711 137.865 69.5777 138.612 69.9911C139.359 70.4044 139.939 70.9911 140.352 71.7511C140.765 72.5111 140.972 73.4111 140.972 74.4511C140.972 75.2377 140.852 75.9444 140.612 76.5711C140.385 77.1977 140.052 77.7377 139.612 78.1911C139.172 78.6311 138.645 78.9711 138.032 79.2111C137.419 79.4377 136.732 79.5511 135.972 79.5511ZM135.972 77.6511C136.465 77.6511 136.899 77.5311 137.272 77.2911C137.645 77.0511 137.932 76.6977 138.132 76.2311C138.345 75.7511 138.452 75.1577 138.452 74.4511C138.452 73.3844 138.225 72.5911 137.772 72.0711C137.319 71.5377 136.719 71.2711 135.972 71.2711C135.479 71.2711 135.045 71.3911 134.672 71.6311C134.299 71.8577 134.005 72.2111 133.792 72.6911C133.592 73.1577 133.492 73.7444 133.492 74.4511C133.492 75.5044 133.719 76.3044 134.172 76.8511C134.625 77.3844 135.225 77.6511 135.972 77.6511ZM50.1254 111.551C49.0187 111.551 48.1854 111.238 47.6254 110.611C47.0654 109.971 46.7854 109.038 46.7854 107.811V98.3511C46.7854 97.9377 46.892 97.6244 47.1054 97.4111C47.3187 97.1977 47.6254 97.0911 48.0254 97.0911C48.4254 97.0911 48.732 97.1977 48.9454 97.4111C49.172 97.6244 49.2854 97.9377 49.2854 98.3511V107.691C49.2854 108.304 49.412 108.758 49.6654 109.051C49.932 109.344 50.3054 109.491 50.7854 109.491C50.892 109.491 50.992 109.491 51.0854 109.491C51.1787 109.478 51.272 109.464 51.3654 109.451C51.552 109.424 51.6787 109.478 51.7454 109.611C51.812 109.731 51.8454 109.984 51.8454 110.371C51.8454 110.704 51.7787 110.964 51.6454 111.151C51.512 111.338 51.292 111.451 50.9854 111.491C50.852 111.504 50.712 111.518 50.5654 111.531C50.4187 111.544 50.272 111.551 50.1254 111.551ZM57.8944 111.551C56.7877 111.551 55.8344 111.344 55.0344 110.931C54.2344 110.518 53.6144 109.931 53.1744 109.171C52.7477 108.411 52.5344 107.511 52.5344 106.471C52.5344 105.458 52.7411 104.571 53.1544 103.811C53.5811 103.051 54.1611 102.458 54.8944 102.031C55.6411 101.591 56.4877 101.371 57.4344 101.371C58.1277 101.371 58.7477 101.484 59.2944 101.711C59.8544 101.938 60.3277 102.264 60.7144 102.691C61.1144 103.118 61.4144 103.638 61.6144 104.251C61.8277 104.851 61.9344 105.531 61.9344 106.291C61.9344 106.531 61.8477 106.718 61.6744 106.851C61.5144 106.971 61.2811 107.031 60.9744 107.031H54.5544V105.591H60.1744L59.8544 105.891C59.8544 105.278 59.7611 104.764 59.5744 104.351C59.4011 103.938 59.1411 103.624 58.7944 103.411C58.4611 103.184 58.0411 103.071 57.5344 103.071C56.9744 103.071 56.4944 103.204 56.0944 103.471C55.7077 103.724 55.4077 104.091 55.1944 104.571C54.9944 105.038 54.8944 105.598 54.8944 106.251V106.391C54.8944 107.484 55.1477 108.304 55.6544 108.851C56.1744 109.384 56.9344 109.651 57.9344 109.651C58.2811 109.651 58.6677 109.611 59.0944 109.531C59.5344 109.438 59.9477 109.284 60.3344 109.071C60.6144 108.911 60.8611 108.844 61.0744 108.871C61.2877 108.884 61.4544 108.958 61.5744 109.091C61.7077 109.224 61.7877 109.391 61.8144 109.591C61.8411 109.778 61.8011 109.971 61.6944 110.171C61.6011 110.371 61.4344 110.544 61.1944 110.691C60.7277 110.984 60.1877 111.204 59.5744 111.351C58.9744 111.484 58.4144 111.551 57.8944 111.551ZM67.1343 111.551C66.4276 111.551 65.7943 111.418 65.2343 111.151C64.6876 110.871 64.2543 110.498 63.9343 110.031C63.6276 109.564 63.4743 109.038 63.4743 108.451C63.4743 107.731 63.6609 107.164 64.0343 106.751C64.4076 106.324 65.0143 106.018 65.8543 105.831C66.6943 105.644 67.8209 105.551 69.2343 105.551H70.2343V106.991H69.2543C68.4276 106.991 67.7676 107.031 67.2743 107.111C66.7809 107.191 66.4276 107.331 66.2143 107.531C66.0143 107.718 65.9143 107.984 65.9143 108.331C65.9143 108.771 66.0676 109.131 66.3743 109.411C66.6809 109.691 67.1076 109.831 67.6543 109.831C68.0943 109.831 68.4809 109.731 68.8143 109.531C69.1609 109.318 69.4343 109.031 69.6343 108.671C69.8343 108.311 69.9343 107.898 69.9343 107.431V105.131C69.9343 104.464 69.7876 103.984 69.4943 103.691C69.2009 103.398 68.7076 103.251 68.0143 103.251C67.6276 103.251 67.2076 103.298 66.7543 103.391C66.3143 103.484 65.8476 103.644 65.3543 103.871C65.1009 103.991 64.8743 104.024 64.6743 103.971C64.4876 103.918 64.3409 103.811 64.2343 103.651C64.1276 103.478 64.0743 103.291 64.0743 103.091C64.0743 102.891 64.1276 102.698 64.2343 102.511C64.3409 102.311 64.5209 102.164 64.7743 102.071C65.3876 101.818 65.9743 101.638 66.5343 101.531C67.1076 101.424 67.6276 101.371 68.0943 101.371C69.0543 101.371 69.8409 101.518 70.4543 101.811C71.0809 102.104 71.5476 102.551 71.8543 103.151C72.1609 103.738 72.3143 104.498 72.3143 105.431V110.231C72.3143 110.644 72.2143 110.964 72.0143 111.191C71.8143 111.404 71.5276 111.511 71.1543 111.511C70.7809 111.511 70.4876 111.404 70.2743 111.191C70.0743 110.964 69.9743 110.644 69.9743 110.231V109.271H70.1343C70.0409 109.738 69.8543 110.144 69.5743 110.491C69.3076 110.824 68.9676 111.084 68.5543 111.271C68.1409 111.458 67.6676 111.551 67.1343 111.551ZM76.1318 111.511C75.7184 111.511 75.3984 111.404 75.1718 111.191C74.9584 110.964 74.8518 110.644 74.8518 110.231V102.671C74.8518 102.258 74.9584 101.944 75.1718 101.731C75.3851 101.518 75.6851 101.411 76.0718 101.411C76.4584 101.411 76.7584 101.518 76.9718 101.731C77.1851 101.944 77.2918 102.258 77.2918 102.671V103.931H77.0918C77.2784 103.131 77.6451 102.524 78.1918 102.111C78.7384 101.698 79.4651 101.451 80.3718 101.371C80.6518 101.344 80.8718 101.418 81.0318 101.591C81.2051 101.751 81.3051 102.004 81.3318 102.351C81.3584 102.684 81.2784 102.958 81.0918 103.171C80.9184 103.371 80.6518 103.491 80.2918 103.531L79.8518 103.571C79.0384 103.651 78.4251 103.904 78.0118 104.331C77.5984 104.744 77.3918 105.331 77.3918 106.091V110.231C77.3918 110.644 77.2851 110.964 77.0718 111.191C76.8584 111.404 76.5451 111.511 76.1318 111.511ZM83.9238 111.511C83.5238 111.511 83.2171 111.404 83.0038 111.191C82.7905 110.964 82.6838 110.644 82.6838 110.231V102.671C82.6838 102.258 82.7905 101.944 83.0038 101.731C83.2171 101.518 83.5171 101.411 83.9038 101.411C84.2905 101.411 84.5905 101.518 84.8038 101.731C85.0171 101.944 85.1238 102.258 85.1238 102.671V104.031L84.9038 103.531C85.1971 102.824 85.6505 102.291 86.2638 101.931C86.8905 101.558 87.5971 101.371 88.3838 101.371C89.1705 101.371 89.8171 101.518 90.3238 101.811C90.8305 102.104 91.2105 102.551 91.4638 103.151C91.7171 103.738 91.8438 104.484 91.8438 105.391V110.231C91.8438 110.644 91.7371 110.964 91.5238 111.191C91.3105 111.404 91.0038 111.511 90.6038 111.511C90.2038 111.511 89.8905 111.404 89.6638 111.191C89.4505 110.964 89.3438 110.644 89.3438 110.231V105.511C89.3438 104.751 89.1971 104.198 88.9038 103.851C88.6238 103.504 88.1838 103.331 87.5838 103.331C86.8505 103.331 86.2638 103.564 85.8238 104.031C85.3971 104.484 85.1838 105.091 85.1838 105.851V110.231C85.1838 111.084 84.7638 111.511 83.9238 111.511ZM97.2891 107.271C97.0358 107.271 96.8358 107.191 96.6891 107.031C96.5558 106.858 96.4891 106.631 96.4891 106.351C96.4891 105.938 96.5358 105.551 96.6291 105.191C96.7358 104.818 96.9024 104.444 97.1291 104.071C97.3558 103.698 97.6558 103.304 98.0291 102.891C98.3091 102.571 98.5291 102.291 98.6891 102.051C98.8624 101.798 98.9824 101.558 99.0491 101.331C99.1291 101.104 99.1691 100.871 99.1691 100.631C99.1691 100.191 99.0091 99.8444 98.6891 99.5911C98.3691 99.3377 97.9158 99.2111 97.3291 99.2111C96.7958 99.2111 96.3091 99.2844 95.8691 99.4311C95.4424 99.5644 95.0091 99.7577 94.5691 100.011C94.2758 100.184 94.0091 100.264 93.7691 100.251C93.5424 100.224 93.3558 100.138 93.2091 99.9911C93.0624 99.8444 92.9691 99.6644 92.9291 99.4511C92.8891 99.2377 92.9224 99.0177 93.0291 98.7911C93.1358 98.5644 93.3291 98.3577 93.6091 98.1711C94.1558 97.8111 94.7824 97.5377 95.4891 97.3511C96.1958 97.1511 96.8624 97.0511 97.4891 97.0511C98.3291 97.0511 99.0624 97.1911 99.6891 97.4711C100.329 97.7511 100.822 98.1377 101.169 98.6311C101.529 99.1244 101.709 99.7044 101.709 100.371C101.709 100.784 101.649 101.178 101.529 101.551C101.409 101.911 101.216 102.278 100.949 102.651C100.682 103.011 100.316 103.404 99.8491 103.831C99.4358 104.204 99.1024 104.544 98.8491 104.851C98.6091 105.158 98.4291 105.451 98.3091 105.731C98.2024 106.011 98.1291 106.311 98.0891 106.631C98.0758 106.818 97.9958 106.971 97.8491 107.091C97.7158 107.211 97.5291 107.271 97.2891 107.271ZM97.2491 111.451C96.7958 111.451 96.4291 111.311 96.1491 111.031C95.8824 110.751 95.7491 110.391 95.7491 109.951C95.7491 109.524 95.8824 109.178 96.1491 108.911C96.4291 108.631 96.7958 108.491 97.2491 108.491C97.7158 108.491 98.0758 108.631 98.3291 108.911C98.5958 109.178 98.7291 109.524 98.7291 109.951C98.7291 110.391 98.5958 110.751 98.3291 111.031C98.0758 111.311 97.7158 111.451 97.2491 111.451Z"
                            fill="#212121"
                        />
                    </svg>
                </div>

                <div>
                    <div className="mx-[39px]">
                        <Link to="/detail/1">
                            <div className="mb-[20px] topic-box1">
                                <div className="topic-box2">Topic 1</div>
                                <svg
                                    width="8"
                                    height="16"
                                    viewBox="0 0 8 16"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path
                                        d="M0.59 1.88L5.17 8L0.59 14.12L2 16L8 8L2 0L0.59 1.88Z"
                                        fill="#333333"
                                    />
                                </svg>
                            </div>
                        </Link>
                        {data.topic.map((v, i) => (
                            <TopicBox topic={v} />
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};
export default Topic;
