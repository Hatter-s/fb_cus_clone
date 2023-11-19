<script setup lang="ts"></script>
<template>
	<nav>
		<div class="first-nav">
			<div class="flex gap-2 items-center">
				<p class="text-lg font-bold">Chiến dịch</p>
				<div class="users">
					Tiến Đạt (2681024292761871)
					<Icon backgroundImage="url(https://static.xx.fbcdn.net/rsrc.php/v3/yk/r/BHWd5E05F5T.png?_nc_eui2=AeFgWD4VYMHID4TQtXENHM2oIBn_R_Tb9togGf9H9Nv22q2R-Klju_JQwZBzRQGzb-gkEQkvEeGs2YhZwfbvtvLp)" backgroundPosition="0px -2438px" backgroundSize="26px 2974px" width="16px" height="16px" />
				</div>
			</div>
			<div class="flex gap-2 items-center">
				<p>Thời gian cập nhật: 47 phút trước</p>
				<button class="btn btn-neu">
					<Icon width="16px" height="16px" backgroundSize="26px 2974px"
					backgroundImage="url('https://static.xx.fbcdn.net/rsrc.php/v3/yk/r/BHWd5E05F5T.png?_nc_eui2=AeFgWD4VYMHID4TQtXENHM2oIBn_R_Tb9togGf9H9Nv22q2R-Klju_JQwZBzRQGzb-gkEQkvEeGs2YhZwfbvtvLp')"
					backgroundPosition="0px -1790px" />
				</button>
				<button class="btn btn-neu">
					Bỏ bản nháp
				</button>
				<button class="btn btn-neu">
					Xem lại và đăng
				</button>
				<button class="btn btn-neu">
					<Icon width="16px" height="16px" backgroundSize="72px 314px"
					backgroundImage="url('https://static.xx.fbcdn.net/rsrc.php/v3/yF/r/PKNItHPerh1.png?_nc_eui2=AeGrrrI0YLfS3VoFHQTprawx-YhtiZ6C7iD5iG2JnoLuIDmID5psfrDGISQ4kDRRVHoZxI6waD4Wv8az7y9yrcXH')"
					backgroundPosition="-18px -246px" />
				</button>
			</div>
		</div>
		<div class="second-nav">
			<div class="search">
				<Icon backgroundImage="url(https://static.xx.fbcdn.net/rsrc.php/v3/yu/r/SclPmV2PWWT.png?_nc_eui2=AeE9S8gZKw2IGPK5p6o1N_Re8lHZhYrkXoTyUdmFiuRehLKrHjd6DmZiURuMsYN1izd8-AczyUyMlcKr-iD_Uny7)" backgroundPosition="-134px -1726px" backgroundSize="280px 1794px" width="16px" height="16px" />
				<input type="text" class="input" id="search" name="search" placeholder="Tìm kiếm và lọc">
			</div>
			<div class="times">
				Tháng này: 1 Tháng 11, 2023 – 18 Tháng 11, 2023&nbsp;
				<Icon backgroundImage="url(https://static.xx.fbcdn.net/rsrc.php/v3/yk/r/BHWd5E05F5T.png?_nc_eui2=AeFgWD4VYMHID4TQtXENHM2oIBn_R_Tb9togGf9H9Nv22q2R-Klju_JQwZBzRQGzb-gkEQkvEeGs2YhZwfbvtvLp)" backgroundPosition="0px -2438px" backgroundSize="26px 2974px" width="16px" height="16px" />
			</div>
		</div>
	</nav>
</template>

<style scoped>
	nav {
		@apply p-2;
	}

	/* FIRST NAV */
	.first-nav {
		@apply flex flex-row flex-nowrap justify-between items-center mb-2;
	}

	.users {
		@apply text-sm py-2 px-4 bg-white border border-gray-500/50 rounded-md flex flex-row flex-nowrap items-center gap-16;
	}

	.btn-neu {
		background-color: rgba(0,0,0,.05);
		border: none;
		@apply h-auto min-h-0 p-3 font-normal normal-case;
	}

	/* SECOND NAV */
	.second-nav {
		@apply flex justify-between items-stretch gap-1 h-[36px];
	}

	.search {
		@apply flex items-center bg-white flex-1 shadow-sm rounded-[10px] px-3 gap-4; 
	}
	.search .input {
		@apply bg-transparent h-auto rounded-[100px] pl-2;
		@apply focus:outline-blue-500;
	}

	.times {
		@apply bg-[hsl(0,0%,90.2%)] flex flex-row flex-nowrap items-center px-4 rounded-md;
	}
</style>
