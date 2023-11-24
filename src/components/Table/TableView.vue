<template>
    <div class="table-contain">
        <table>
            <thead>
                <tr>
                    <th ref="thCheckbox">
                        <label for="checkbox-th" class="checkbox">
                            <input type="checkbox" name="checkbox-th" id="checkbox-th">
                            <div class="checkmark"></div>
                        </label>
                    </th>
                    <th ref="thOnOff" style="width: 100px">
                        Tắt/Bật
                    </th>
                    <th ref="thCampaign" style="width: 300px">
                        <div>
                            Chiến dịch
                            <Icon
                                backgroundImage="url(https://static.xx.fbcdn.net/rsrc.php/v3/yk/r/BHWd5E05F5T.png?_nc_eui2=AeFgWD4VYMHID4TQtXENHM2oIBn_R_Tb9togGf9H9Nv22q2R-Klju_JQwZBzRQGzb-gkEQkvEeGs2YhZwfbvtvLp)"
                                backgroundPosition="0px -2862px" backgroundSize="26px 2974px" width="12px" height="12px" />
                        </div>
                    </th>
                    <th ref="thProvide" style="width: 200px;">
                        <div>
                            Phân phối
                            <Icon
                                backgroundImage="url(https://static.xx.fbcdn.net/rsrc.php/v3/yk/r/BHWd5E05F5T.png?_nc_eui2=AeFgWD4VYMHID4TQtXENHM2oIBn_R_Tb9togGf9H9Nv22q2R-Klju_JQwZBzRQGzb-gkEQkvEeGs2YhZwfbvtvLp)"
                                backgroundPosition="0px -2862px" backgroundSize="26px 2974px" width="12px" height="12px" />
                        </div>
                    </th>
                    <th ref="thPriceStrategy" style="width: 300px;">
                        Chiến lược giá thầu
                    </th>
                    <th ref="thFunding" style="width: 100px">
                        Ngân sách
                    </th>
                    <th ref="thProvideSetting" style="width: 200px">
                        Cài đặt phân bổ
                    </th>
                    <th ref="thResult" style="width: 200px">
                        <div>
                            <div>
                                <Icon
                                    backgroundImage="url(https://static.xx.fbcdn.net/rsrc.php/v3/yU/r/3AWIO9PJmA-.png?_nc_eui2=AeG-oHT9sCQx6j6jaAMA8tCfo8m37W065FyjybftbTrkXDledfX55LyOfLAMarTK11zK2kLcZzk1i4OTbrc5hjkX)"
                                    backgroundPosition="-134px -374px" backgroundSize="196px 470px" width="12px"
                                    height="12px" />
                                <span class="pl-1">
                                    Kết quả
                                </span>
                            </div>

                            <Icon
                                backgroundImage="url(https://static.xx.fbcdn.net/rsrc.php/v3/yk/r/BHWd5E05F5T.png?_nc_eui2=AeFgWD4VYMHID4TQtXENHM2oIBn_R_Tb9togGf9H9Nv22q2R-Klju_JQwZBzRQGzb-gkEQkvEeGs2YhZwfbvtvLp)"
                                backgroundPosition="0px -2862px" backgroundSize="26px 2974px" width="12px" height="12px" />
                        </div>

                    </th>
                    <th>
                        <div>
                            Người tiếp cận
                            <Icon
                                backgroundImage="url(https://static.xx.fbcdn.net/rsrc.php/v3/yk/r/BHWd5E05F5T.png?_nc_eui2=AeFgWD4VYMHID4TQtXENHM2oIBn_R_Tb9togGf9H9Nv22q2R-Klju_JQwZBzRQGzb-gkEQkvEeGs2YhZwfbvtvLp)"
                                backgroundPosition="0px -2862px" backgroundSize="26px 2974px" width="12px" height="12px" />
                        </div>

                    </th>
                    <th>
                        <div>
                            Lượt hiển thị
                            <Icon
                                backgroundImage="url(https://static.xx.fbcdn.net/rsrc.php/v3/yk/r/BHWd5E05F5T.png?_nc_eui2=AeFgWD4VYMHID4TQtXENHM2oIBn_R_Tb9togGf9H9Nv22q2R-Klju_JQwZBzRQGzb-gkEQkvEeGs2YhZwfbvtvLp)"
                                backgroundPosition="0px -2862px" backgroundSize="26px 2974px" width="12px" height="12px" />
                        </div>

                    </th>
                    <th>
                        <div>
                            Chi phí trên mỗi kết quả
                            <Icon
                                backgroundImage="url(https://static.xx.fbcdn.net/rsrc.php/v3/yk/r/BHWd5E05F5T.png?_nc_eui2=AeFgWD4VYMHID4TQtXENHM2oIBn_R_Tb9togGf9H9Nv22q2R-Klju_JQwZBzRQGzb-gkEQkvEeGs2YhZwfbvtvLp)"
                                backgroundPosition="0px -2862px" backgroundSize="26px 2974px" width="12px" height="12px" />
                        </div>

                    </th>
                    <th>
                        <div>
                            Số tiền đã chi tiêu
                            <Icon
                                backgroundImage="url(https://static.xx.fbcdn.net/rsrc.php/v3/yk/r/BHWd5E05F5T.png?_nc_eui2=AeFgWD4VYMHID4TQtXENHM2oIBn_R_Tb9togGf9H9Nv22q2R-Klju_JQwZBzRQGzb-gkEQkvEeGs2YhZwfbvtvLp)"
                                backgroundPosition="0px -2862px" backgroundSize="26px 2974px" width="12px" height="12px" />
                        </div>

                    </th>
                    <th>
                        <div>
                            Kết thúc
                            <Icon
                                backgroundImage="url(https://static.xx.fbcdn.net/rsrc.php/v3/yk/r/BHWd5E05F5T.png?_nc_eui2=AeFgWD4VYMHID4TQtXENHM2oIBn_R_Tb9togGf9H9Nv22q2R-Klju_JQwZBzRQGzb-gkEQkvEeGs2YhZwfbvtvLp)"
                                backgroundPosition="0px -2862px" backgroundSize="26px 2974px" width="12px" height="12px" />
                        </div>

                    </th>
                    <th>
                        <Icon
                            backgroundImage="url(https://static.xx.fbcdn.net/rsrc.php/v3/yk/r/BHWd5E05F5T.png?_nc_eui2=AeFgWD4VYMHID4TQtXENHM2oIBn_R_Tb9togGf9H9Nv22q2R-Klju_JQwZBzRQGzb-gkEQkvEeGs2YhZwfbvtvLp)"
                            backgroundPosition="0px -2792px" backgroundSize="26px 2974px" width="12px" height="12px" />
                    </th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="content in tableStore.$state.bodyContent">
                    <td>
                        <label for="checkbox-td-1" class="checkbox">
                            <input type="checkbox" name="checkbox-td-1" id="checkbox-td-1">
                            <div class="checkmark"></div>
                        </label>
                    </td>
                    <td class="px-3 py-1" :style="{ maxWidth: thWidth.onOff + 'px' }">
                        <label class="switch">
                            <input type="checkbox" checked>
                            <span class="slider round"></span>
                        </label>
                    </td>
                    <td>
                        <p class="text-pri">
                            {{ content.campaign }}
                        </p>
                    </td>
                    <td>
                        <p>
                            <Icon
                                backgroundImage="url(https://static.xx.fbcdn.net/rsrc.php/v3/yf/r/qbFejCzetqH.png?_nc_eui2=AeGiurWcAocifroRi4htkayaYyIXjxVi475jIhePFWLjvkabdXstm1Mb-2USkxxiCu6I7ITYAMLmlg7zvOL1je7L)"
                                backgroundSize="26px 128px" backgroundPosition="0px -108px" width="8px" height="8px" />

                            <span class="pl-2">
                                {{ content.provide }}
                            </span>
                        </p>
                    </td>
                    <td>
                        <p>
                            {{ content.priceStrategy }}
                        </p>
                    </td>
                    <td>
                        <p>
                            {{ content.funding }}
                        </p>
                    </td>
                    <td>
                        <p>
                            {{ content.provideSetting }}
                        </p>
                    </td>
                    <td>
                        <div>
                            <span>
                                {{ content.result }}
                            </span>
                            <p class="neutral-text">
                                Lượt bắt đầu cuộc trò chuyện qua tin nhắn
                            </p>
                        </div>
                    </td>
                    <td>{{ content.user }}</td>
                    <td>{{ content.displayCount }}</td>
                    <td>
                        <div>
                            <span>
                                {{ content.pricePerResult }}
                            </span>
                            <p class="neutral-text">
                                Trên mỗi lượt bắt đầu cuộc trò chuyện qua tin nhắn
                            </p>
                        </div>
                    </td>
                    <td>
                        <p>
                            {{ content.moneySpent }}
                        </p>
                    </td>
                    <td>
                        <p>
                            {{ content.end }}
                        </p>
                    </td>
                    <td></td>
                </tr>
            </tbody>
            <tfoot>
                <tr v-for="content in tableStore.$state.footerContent">
                    <td colspan="2"></td>
                    <td>
                        <div>
                            <p class="font-bold text-start">
                                {{ content.totalCampaign }}
                                <Icon
                                    backgroundImage="url(https://static.xx.fbcdn.net/rsrc.php/v3/yF/r/PKNItHPerh1.png?_nc_eui2=AeGrrrI0YLfS3VoFHQTprawx-YhtiZ6C7iD5iG2JnoLuIDmID5psfrDGISQ4kDRRVHoZxI6waD4Wv8az7y9yrcXH)"
                                    backgroundSize="72px 314px" backgroundPosition="0px -300px" width="12px"
                                    height="12px" />
                            </p>
                            <p class="neutral-text text-start">
                                Loại trừ các mục đã xóa
                            </p>
                        </div>
                    </td>
                    <td colspan="3">
                    </td>
                    <td>
                        <p class="font-bold text-start">
                            {{ content.provideSetting }}
                        </p>
                    </td>
                    <td>
                        <p class="font-bold">
                            {{ content.result }}
                        </p>
                    </td>
                    <td>
                        <p class="font-bold">
                            {{ content.user }}
                        </p>
                        <p class="neutral-text">
                            tài khoản trong Trung tâm tài khoản
                        </p>
                    </td>
                    <td>
                        <p class="font-bold">
                            {{ content.displayCount }}
                        </p>
                        <p class="neutral-text">
                            Tổng
                        </p>
                    </td>
                    <td>
                        <p class="font-bold">
                            {{ content.pricePerResult }}
                        </p>
                    </td>
                    <td>
                        <p class="font-bold">
                            {{ content.moneySpent }}
                        </p>
                        <p class="neutral-text">
                            Tổng chi tiêu
                        </p>
                    </td>
                    <td></td>
                    <td></td>
                </tr>
            </tfoot>
        </table>
    </div>
</template>

<script setup lang="ts">
import { useTableStore } from '../../stores';
// //will use the default options
const thCheckbox = ref('');
const thOnOff = ref<HTMLTableCellElement | undefined>();
const thCampaign = ref<HTMLTableCellElement | undefined>();
const thProvide = ref<HTMLTableCellElement | undefined>();
const thPriceStrategy = ref<HTMLTableCellElement | undefined>();
const thFunding = ref<HTMLTableCellElement | undefined>();
const thProvideSetting = ref<HTMLTableCellElement | undefined>();
const thResult = ref<HTMLTableCellElement | undefined>();
const thUser = ref<HTMLTableCellElement | undefined>();
const thDisplayCount = ref<HTMLTableCellElement | undefined>();
const thPricePerResult = ref<HTMLTableCellElement | undefined>();
const thMoneySpent = ref<HTMLTableCellElement | undefined>();
const thEnd = ref<HTMLTableCellElement | undefined>();

interface ThWidth {
    onOff: number | undefined
}

const thWidth: ThWidth = reactive({
    onOff: 100
});

const tableStore = useTableStore();

console.log(tableStore.$state);


onMounted(() => {
    thWidth.onOff = thOnOff.value?.offsetWidth;
})
</script>

<style scoped>
.table-contain {
    @apply overflow-x-scroll mt-2;
}

table {
    width: max-content;
    border-spacing: 0;
    font-size: 14px;
}

tr,
th,
td {
    @apply border;
}

th:not(th:first-child, th:nth-child(2)) {
    resize: horizontal;
    overflow: hidden;
    text-align: start;
    padding: 6px 0 6px 10px;
}

th:not(th:first-child) div {
    @apply flex justify-between items-center pr-2;
}


tr td {
    @apply py-1 px-3 text-end max-w-[100px];
}

th:nth-child(1),
tr td:nth-child(1) {
    position: sticky;
    left: 0;
    width: auto;
    min-width: auto;
    background: white;
}

th:nth-child(2),
tbody tr td:nth-child(2) {
    position: sticky;
    /* 1st cell left/right padding + 1st cell width + 1st cell left/right border width */
    /* 0 + 5 + 150 + 5 + 1 */
    left: 51px;
    width: 100px;
    background: white;
}

th:nth-child(3),
tbody tr td:nth-child(3),
tfoot tr td:nth-child(2) {
    position: sticky;
    /* 1st cell left/right padding + 1st cell width + 1st cell left/right border width */
    /* 0 + 5 + 150 + 5 + 1 */
    left: 151px;
    background: white;
}



p {
    white-space: nowrap;
    overflow-x: hidden;
    text-overflow: ellipsis;
    min-width: 0;
}

.neutral-text {
    color: rgba(0, 0, 0, 0.5);
    @apply text-xs;
}

.text-pri {
    color: rgb(20, 97, 204);
    text-align: start;
}

tr td div {
    @apply flex flex-col;
}


/* The checkbox */
.checkbox {
    display: block;
    position: relative;
    cursor: pointer;
    font-size: 22px;
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
    height: auto;
    width: min-content;
    z-index: 100;
    left: 50%;
    transform: translateX(-50%);
}

.checkbox input {
    position: absolute;
    opacity: 0;
    cursor: pointer;
    height: 0;
    width: 0;
}

.checkmark {
    position: relative;
    top: 0;
    left: 0;
    height: 24px;
    width: 24px;
    background-color: white;
    border-radius: 5px;
}

.checkbox:hover input+.checkmark {
    @apply border border-gray-500/50;
}

.checkbox input:checked~.checkmark {
    background-color: white;
}

.checkmark:after {
    content: "";
    position: absolute;
    display: none;
}

.checkbox input:checked~.checkmark:after {
    display: block;
}

.checkbox .checkmark:after {
    left: 8px;
    top: 3px;
    width: 8px;
    height: 15px;
    border: solid hsl(214.93, 85.54%, 51.18%);
    border-width: 0 2px 2px 0;
    -webkit-transform: rotate(45deg);
    -ms-transform: rotate(45deg);
    transform: rotate(45deg);
}

/* Toggle */
.switch {
    position: relative;
    display: inline-block;
    width: 38px;
    height: 22px;
    transform: translate(-50%, 0);
}

.switch input {
    opacity: 0;
    width: 0;
    height: 0;
}

/* The slider */
.slider {
    position: absolute;
    cursor: pointer;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: white;
    -webkit-transition: .4s;
    transition: .4s;
    border: 1px solid #cccccc90;
}

.slider:before {
    position: absolute;
    content: "";
    height: 18px;
    width: 18px;
    left: 2px;
    bottom: 1px;
    background-color: black;
    -webkit-transition: .4s;
    transition: .4s;
}

input:checked+.slider {
    background-color: hsl(213.85, 95.12%, 91.96%);
}

input:focus+.slider {
    box-shadow: 0 0 1px #2196F3;
}

input:checked+.slider:before {
    width: 20px;
    height: 20px;
    background-color: hsl(214.93, 85.54%, 51.18%);
    --translateX: translateX(15px);
    --translateY: translateY(1px);
    -webkit-transform: var(--translateX) var(--translateY);
    -ms-transform: var(--translateX) var(--translateY);
    transform: var(--translateX) var(--translateY);
}

/* Rounded sliders */
.slider.round {
    border-radius: 34px;
}

.slider.round:before {
    border-radius: 50%;
}

/* SCROLL */

/* width */
::-webkit-scrollbar {
    height: 10px;
}

::-webkit-scrollbar:hover {
    height: 12px;
}

::-webkit-scrollbar-button {
    background: transparent;
    width: 5px;
}

/* Track */
::-webkit-scrollbar-track {

    background: transparent;
}

/* Handle */
::-webkit-scrollbar-thumb {
    border-radius: 6px;
    background: hsl(0, 0%, 76.08%);
}

/* Handle on hover */
::-webkit-scrollbar-thumb:hover {
    background: hsl(0, 0%, 50.08%);
    ;
}</style>