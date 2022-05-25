export default `
.humany-trigger {
	position: fixed;
	transform: scale(0);
	box-shadow: rgba(0, 0, 0, 0.16) 0px 5px 40px;
	bottom: 20px;
	right: 20px;
	z-index: 5;
	display: flex;
	align-items: center;
	border: none;
	line-height: 55px;
	height: 55px;
	width: 55px;
	border-radius: 55px;
	cursor: pointer;
	background-color: #990AE3;
	font-family: Lato;
	text-decoration: none;
	border: 3px dashed transparent;
	box-sizing: border-box;
}

	.humany-trigger.humany-rendered {
		transition: transform 200ms ease-out;
		transform: scale(1);
	}

	.humany-trigger:focus {
		outline: none;
	}
	
	.humany-trigger.humany-tabbing:focus {
		border: 3px dashed #990AE3;
		background-color: #FFFFFF;
	}

	.humany-trigger.humany-tabbing:focus i {
		color: #990AE3;
	}

	.humany-trigger.humany-tabbing:focus .humany-close,
	.humany-trigger.humany-tabbing:focus .humany-close path {
		fill: #990AE3;
	}

	.humany-trigger:hover {
		transform: scale(1.1);
	}

	.humany-trigger span {
		display: inline-block;
		font-size: 16px;
		margin: 0px 2px;
		line-height: 32px;
		vertical-align: top;
		text-transform: uppercase;
		color: #FFFFFF;
	}

	.humany-trigger i {
		display: inline-block;
		font-size: 32px;
		width: 100%;
		line-height: inherit;
		text-align: center;
		opacity: 1;
		transform: rotate(0deg) scale(1);
		transition: opacity 200ms ease-out, transform 200ms ease-out;
		color: #FFFFFF;
	}


	.humany-trigger .humany-custom-icon {
		width: 1em;
		height: 1em;
	}

	.humany-trigger .humany-close {
		opacity: 0;
		transition: transform 200ms ease-out;
		transform: rotate(180deg) scale(0);
		position: absolute;
		width: 23px;
		height: 23px;
		left: 14px;
		top: 10px;
		fill: #FFFFFF;
	}

	.humany-trigger .humany-loader {
		opacity: 0;
		border: 3px solid rgba(255, 255, 255, 0.2);
		border-left-color: #FFFFFF;
		transition: opacity 200ms ease-out, transform 200ms ease-out;
		transform: rotate(180deg) scale(0);
		animation: humany-loading-animation 800ms infinite linear;
		stroke: transparent;
		fill: transparent;
	}

		.humany-trigger .humany-loader,
		.humany-trigger .humany-loader:after {
			border-radius: 50%;
			width: 22px;
			height: 22px;
			position: absolute;
			top: 11px;
			left: 9px;
		}

			.humany-trigger .humany-loader svg {
				animation: humany-loading-animation 800ms infinite linear;
			}

				.humany-trigger .humany-loader svg circle {
					stroke: transparent;
				}

	.humany-trigger.humany-active .humany-close {
		opacity: 1;
		transform: rotate(0deg) scale(1);
	}

	.humany-trigger.humany-active .humany-custom-icon,
	.humany-trigger.humany-active .fa,
	.humany-trigger.humany-active .loader {
		opacity: 0;
		transform: rotate(-180deg) scale(0);
	}

	.humany-trigger.humany-loading .humany-loader {
		opacity: 1;
		transform: rotate(0) scale(1);
	}

	.humany-trigger.humany-loading .humany-custom-icon,
	.humany-trigger.humany-loading .fa {
		opacity: 0;
		transform: rotate(-180deg) scale(0);
	}

	.humany-trigger.humany-has-text:not(.humany-active):not(.humany-loading),
	.humany-trigger.humany-has-text:not(.humany-active):not(.humany-loading) i {
		width: auto;
	}

	.humany-trigger.humany-has-text .humany-icon.fa,
	.humany-trigger.humany-has-text .humany-icon.humany-custom-icon {
		margin: 0 3px;
	}

	.humany-trigger.humany-has-text.humany-active span:nth-child(4),
	.humany-trigger.humany-has-text.humany-loading span:nth-child(4) {
		display: none;
	}

@keyframes humany-loading-animation {
	0% {
		transform: rotate(0deg);
	}

	100% {
		transform: rotate(360deg);
	}
}
`;
