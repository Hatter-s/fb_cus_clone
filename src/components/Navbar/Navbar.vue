<script setup lang="ts"></script>
<template>
	<nav>
		<div class="first-nav">
			<div class="flex gap-4 items-center">
				<p class="text-lg font-bold">Chiến dịch</p>
				<div>
					Tiến Đạt (2681024292761871)
					<Icon width="16px" height="16px" 
					backgroundSize="34px 420px"
					backgroundImage="url(/rsrc.php/v3/yH/r/ZsowEddgI5r.png)"
					backgroundPosition="0px -402px" />
				</div>
			</div>
			<div class="flex gap-4 items-center">
				<p>Thời gian cập nhật: 47 phút trước</p>
				<button class="btn btn-neu">
					<Icon width="16px" height="16px" backgroundSize="26px 2974px"
					backgroundImage="url('https://static.xx.fbcdn.net/rsrc.php/v3/yk/r/BHWd5E05F5T.png?_nc_eui2=AeFgWD4VYMHID4TQtXENHM2oIBn_R_Tb9togGf9H9Nv22q2R-Klju_JQwZBzRQGzb-gkEQkvEeGs2YhZwfbvtvLp')"
					backgroundPosition="0px -1790px" />
				</button>
				<button class="btn">
					Bỏ bản nháp
				</button>
				<button class="btn">
					Xem lại và đăng
				</button>
				<button>
					<Icon width="16px" height="16px" backgroundSize="72px 314px"
					backgroundImage="url('https://static.xx.fbcdn.net/rsrc.php/v3/yF/r/PKNItHPerh1.png?_nc_eui2=AeGrrrI0YLfS3VoFHQTprawx-YhtiZ6C7iD5iG2JnoLuIDmID5psfrDGISQ4kDRRVHoZxI6waD4Wv8az7y9yrcXH')"
					backgroundPosition="-18px -246px" />
				</button>
			</div>
		</div>
		<div class="second-nav"></div>
	</nav>
</template>

<style scoped>
	.first-nav {
		@apply flex flex-row flex-nowrap justify-between;
	}
	.btn-neu {
		background-color: rgba(0,0,0,.05);
		border: none;
		@apply px-2 py-2; 
	}
</style>
