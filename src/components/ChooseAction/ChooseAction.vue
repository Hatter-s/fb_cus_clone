<template>
    <div class="choose-action">
        <button class="active">
            <Icon backgroundImage="url(https://static.xx.fbcdn.net/rsrc.php/v3/yk/r/BHWd5E05F5T.png?_nc_eui2=AeFgWD4VYMHID4TQtXENHM2oIBn_R_Tb9togGf9H9Nv22q2R-Klju_JQwZBzRQGzb-gkEQkvEeGs2YhZwfbvtvLp)" backgroundSize="26px 2974px" backgroundPosition="0px -52px" width="24px" height="24px" />
            Chiến dịch
        </button>
        <button>
            <Icon backgroundImage="url(https://static.xx.fbcdn.net/rsrc.php/v3/yk/r/BHWd5E05F5T.png?_nc_eui2=AeFgWD4VYMHID4TQtXENHM2oIBn_R_Tb9togGf9H9Nv22q2R-Klju_JQwZBzRQGzb-gkEQkvEeGs2YhZwfbvtvLp)" backgroundSize="26px 2974px" backgroundPosition="0px -958px" width="20px" height="20px" />
            Nhóm quảng cáo
        </button>
        <button>
            <Icon backgroundImage="url(https://static.xx.fbcdn.net/rsrc.php/v3/yk/r/BHWd5E05F5T.png?_nc_eui2=AeFgWD4VYMHID4TQtXENHM2oIBn_R_Tb9togGf9H9Nv22q2R-Klju_JQwZBzRQGzb-gkEQkvEeGs2YhZwfbvtvLp)" backgroundSize="26px 2974px" backgroundPosition="0px -936px" width="20px" height="20px" />
            Quảng cáo
        </button>
    </div>
</template>

<script setup lang="ts">

</script>

<style scoped>
    .choose-action {
        @apply flex justify-between items-end px-4 gap-2;
    }
    .choose-action button {
        @apply flex justify-start items-center normal-case bg-[hsl(0,0%,98.04%)] shadow-md border-none flex-1 text-base leading-none text-black  box-content h-[44px] px-4 rounded-ss-md rounded-se-md gap-2 font-bold;
    }
    .choose-action button.active {
        @apply h-[49px] max-h-[49px] bg-white text-[hsl(214.93,85.54%,51.18%)] ;
    }
</style>