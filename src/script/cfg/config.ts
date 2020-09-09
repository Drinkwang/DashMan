module game.cfg{
	import Loader = laya.net.Loader;
	import Handler = laya.utils.Handler;

	export class Asserts {
		public View:AssertsView;
		public Font:AssertsFont;
		public Common:string[];
	}

	export class AssertsView {
		public TaskView:AssertsViewTaskView;
		public NoviceAchieveGainView:AssertsViewNoviceAchieveGainView;
		public FeedbackView:AssertsViewFeedbackView;
		public ExchangeView:AssertsViewExchangeView;
		public SmallLoadingView:AssertsViewSmallLoadingView;
		public ExchangePhoneChargeRecordView:AssertsViewExchangePhoneChargeRecordView;
		public RankView:AssertsViewRankView;
		public TVBroadcastView:AssertsViewTVBroadcastView;
		public DDZChuangGuanExchangeView:AssertsViewDDZChuangGuanExchangeView;
		public VipView:AssertsViewVipView;
		public ActivityView:AssertsViewActivityView;
		public NoticeView:AssertsViewNoticeView;
		public ActivityBuYuRuleView:AssertsViewActivityBuYuRuleView;
		public BagView:AssertsViewBagView;
		public DoleMoneyView:AssertsViewDoleMoneyView;
		public MatchRankView:AssertsViewMatchRankView;
		public HuaFeiExchangeTipView:AssertsViewHuaFeiExchangeTipView;
		public MailView:AssertsViewMailView;
		public HallGuideView:AssertsViewHallGuideView;
		public ExchangePhoneChargeRewardInfoView:AssertsViewExchangePhoneChargeRewardInfoView;
		public MaintainDialog:AssertsViewMaintainDialog;
		public ExchangeSucView:AssertsViewExchangeSucView;
		public GuideStartView:AssertsViewGuideStartView;
		public RewardView:AssertsViewRewardView;
		public DollMachineView:AssertsViewDollMachineView;
		public ActivityLittleGiftsView:AssertsViewActivityLittleGiftsView;
		public ActivityRedPacketWallOpenOneView:AssertsViewActivityRedPacketWallOpenOneView;
		public ActivityZhaYuRankView:AssertsViewActivityZhaYuRankView;
		public MatchRecordView:AssertsViewMatchRecordView;
		public HallGuideTurntableView:AssertsViewHallGuideTurntableView;
		public FirstRechargeView:AssertsViewFirstRechargeView;
		public GrandPrixView:AssertsViewGrandPrixView;
		public LuckyTurntableView:AssertsViewLuckyTurntableView;
		public ExchangePhoneChargeView:AssertsViewExchangePhoneChargeView;
		public PrivilegeView:AssertsViewPrivilegeView;
		public MysteryShopView:AssertsViewMysteryShopView;
		public DDZChuangGuanTurntableView:AssertsViewDDZChuangGuanTurntableView;
		public BroadcastView:AssertsViewBroadcastView;
		public SettingView:AssertsViewSettingView;
		public MakeUpView:AssertsViewMakeUpView;
		public MatchRewardView:AssertsViewMatchRewardView;
		public BaoFuDongHuaView:AssertsViewBaoFuDongHuaView;
		public MysteryShopBuyCountView:AssertsViewMysteryShopBuyCountView;
		public ActivityRedPacketWallOpenTenView:AssertsViewActivityRedPacketWallOpenTenView;
		public NoviceAchieveView:AssertsViewNoviceAchieveView;
		public HallView:AssertsViewHallView;
		public MatchRuleView:AssertsViewMatchRuleView;
		public BlueVipView:AssertsViewBlueVipView;
		public DDZDailyTaskView:AssertsViewDDZDailyTaskView;
		public DollMachineRuleView:AssertsViewDollMachineRuleView;
		public LoginView:AssertsViewLoginView;
		public AllPlayerView:AssertsViewAllPlayerView;
		public DDZGuideView:AssertsViewDDZGuideView;
		public SkinView:AssertsViewSkinView;
		public ExchangePhoneChargePersonInfoView:AssertsViewExchangePhoneChargePersonInfoView;
	}

	export class AssertsViewTaskView {
		public urls:string[];
		public showCmd:string;
		public hideCmd:string;
		public openType:number;
	}

	export class AssertsViewNoviceAchieveGainView {
		public urls:string[];
		public showCmd:string;
		public hideCmd:string;
		public openType:number;
	}

	export class AssertsViewFeedbackView {
		public urls:string[];
		public showCmd:string;
		public hideCmd:string;
		public openType:number;
	}

	export class AssertsViewExchangeView {
		public urls:string[];
		public showCmd:string;
		public hideCmd:string;
		public openType:number;
	}

	export class AssertsViewSmallLoadingView {
		public urls:Object[];
		public showCmd:string;
		public hideCmd:string;
		public openType:number;
	}

	export class AssertsViewExchangePhoneChargeRecordView {
		public urls:string[];
		public showCmd:string;
		public hideCmd:string;
		public openType:number;
	}

	export class AssertsViewRankView {
		public urls:string[];
		public showCmd:string;
		public hideCmd:string;
		public openType:number;
	}

	export class AssertsViewTVBroadcastView {
		public urls:string[];
		public showCmd:string;
		public hideCmd:string;
		public openType:number;
	}

	export class AssertsViewDDZChuangGuanExchangeView {
		public urls:string[];
		public showCmd:string;
		public hideCmd:string;
		public openType:number;
	}

	export class AssertsViewVipView {
		public urls:string[];
		public showCmd:string;
		public hideCmd:string;
		public openType:number;
	}

	export class AssertsViewActivityView {
		public urls:string[];
		public showCmd:string;
		public hideCmd:string;
		public openType:number;
	}

	export class AssertsViewNoticeView {
		public showCmd:string;
		public hideCmd:string;
		public openType:number;
	}

	export class AssertsViewActivityBuYuRuleView {
		public urls:Object[];
		public showCmd:string;
		public hideCmd:string;
		public openType:number;
	}

	export class AssertsViewBagView {
		public urls:string[];
		public showCmd:string;
		public hideCmd:string;
		public openType:number;
	}

	export class AssertsViewDoleMoneyView {
		public urls:string[];
		public showCmd:string;
		public hideCmd:string;
		public openType:number;
	}

	export class AssertsViewMatchRankView {
		public urls:string[];
		public showCmd:string;
		public hideCmd:string;
		public openType:number;
	}

	export class AssertsViewHuaFeiExchangeTipView {
		public urls:string[];
		public showCmd:string;
		public hideCmd:string;
		public openType:number;
	}

	export class AssertsViewMailView {
		public urls:string[];
		public showCmd:string;
		public hideCmd:string;
		public openType:number;
	}

	export class AssertsViewHallGuideView {
		public urls:string[];
		public showCmd:string;
		public hideCmd:string;
		public openType:number;
	}

	export class AssertsViewExchangePhoneChargeRewardInfoView {
		public urls:string[];
		public showCmd:string;
		public hideCmd:string;
		public openType:number;
	}

	export class AssertsViewMaintainDialog {
		public urls:Object[];
		public showCmd:string;
		public hideCmd:string;
		public openType:number;
	}

	export class AssertsViewExchangeSucView {
		public urls:string[];
		public showCmd:string;
		public hideCmd:string;
		public openType:number;
	}

	export class AssertsViewGuideStartView {
		public urls:string[];
		public showCmd:string;
		public hideCmd:string;
		public openType:number;
	}

	export class AssertsViewRewardView {
		public urls:string[];
		public showCmd:string;
		public hideCmd:string;
		public openType:number;
	}

	export class AssertsViewDollMachineView {
		public urls:string[];
		public showCmd:string;
		public hideCmd:string;
		public openType:number;
	}

	export class AssertsViewActivityLittleGiftsView {
		public urls:string[];
		public showCmd:string;
		public hideCmd:string;
		public openType:number;
	}

	export class AssertsViewActivityRedPacketWallOpenOneView {
		public urls:string[];
		public showCmd:string;
		public hideCmd:string;
		public openType:number;
	}

	export class AssertsViewActivityZhaYuRankView {
		public urls:string[];
		public showCmd:string;
		public hideCmd:string;
		public openType:number;
	}

	export class AssertsViewMatchRecordView {
		public urls:string[];
		public showCmd:string;
		public hideCmd:string;
		public openType:number;
	}

	export class AssertsViewHallGuideTurntableView {
		public urls:string[];
		public showCmd:string;
		public hideCmd:string;
		public openType:number;
	}

	export class AssertsViewFirstRechargeView {
		public urls:string[];
		public showCmd:string;
		public hideCmd:string;
		public openType:number;
	}

	export class AssertsViewGrandPrixView {
		public urls:string[];
		public showCmd:string;
		public hideCmd:string;
		public openType:number;
	}

	export class AssertsViewLuckyTurntableView {
		public urls:string[];
		public showCmd:string;
		public hideCmd:string;
		public openType:number;
	}

	export class AssertsViewExchangePhoneChargeView {
		public urls:string[];
		public showCmd:string;
		public hideCmd:string;
		public openType:number;
	}

	export class AssertsViewPrivilegeView {
		public urls:string[];
		public showCmd:string;
		public hideCmd:string;
		public openType:number;
	}

	export class AssertsViewMysteryShopView {
		public urls:string[];
		public showCmd:string;
		public hideCmd:string;
		public openType:number;
	}

	export class AssertsViewDDZChuangGuanTurntableView {
		public urls:string[];
		public showCmd:string;
		public hideCmd:string;
		public openType:number;
	}

	export class AssertsViewBroadcastView {
		public urls:Object[];
		public showCmd:string;
		public hideCmd:string;
		public openType:number;
	}

	export class AssertsViewSettingView {
		public urls:string[];
		public showCmd:string;
		public hideCmd:string;
		public openType:number;
	}

	export class AssertsViewMakeUpView {
		public urls:string[];
		public showCmd:string;
		public hideCmd:string;
		public openType:number;
	}

	export class AssertsViewMatchRewardView {
		public urls:string[];
		public showCmd:string;
		public hideCmd:string;
		public openType:number;
	}

	export class AssertsViewBaoFuDongHuaView {
		public urls:Object[];
		public showCmd:string;
		public hideCmd:string;
		public openType:number;
	}

	export class AssertsViewMysteryShopBuyCountView {
		public urls:Object[];
		public showCmd:string;
		public hideCmd:string;
		public openType:number;
	}

	export class AssertsViewActivityRedPacketWallOpenTenView {
		public urls:string[];
		public showCmd:string;
		public hideCmd:string;
		public openType:number;
	}

	export class AssertsViewNoviceAchieveView {
		public urls:string[];
		public showCmd:string;
		public hideCmd:string;
		public openType:number;
	}

	export class AssertsViewHallView {
		public urls:string[];
		public showCmd:string;
		public hideCmd:string;
		public openType:number;
	}

	export class AssertsViewMatchRuleView {
		public urls:string[];
		public showCmd:string;
		public hideCmd:string;
		public openType:number;
	}

	export class AssertsViewBlueVipView {
		public urls:string[];
		public showCmd:string;
		public hideCmd:string;
		public openType:number;
	}

	export class AssertsViewDDZDailyTaskView {
		public urls:string[];
		public showCmd:string;
		public hideCmd:string;
		public openType:number;
	}

	export class AssertsViewDollMachineRuleView {
		public urls:Object[];
		public showCmd:string;
		public hideCmd:string;
		public openType:number;
	}

	export class AssertsViewLoginView {
		public urls:string[];
		public showCmd:string;
		public hideCmd:string;
		public openType:number;
	}

	export class AssertsViewAllPlayerView {
		public urls:string[];
		public showCmd:string;
		public hideCmd:string;
		public openType:number;
	}

	export class AssertsViewDDZGuideView {
		public urls:string[];
		public showCmd:string;
		public hideCmd:string;
		public openType:number;
	}

	export class AssertsViewSkinView {
		public urls:string[];
		public showCmd:string;
		public hideCmd:string;
		public openType:number;
	}

	export class AssertsViewExchangePhoneChargePersonInfoView {
		public urls:string[];
		public showCmd:string;
		public hideCmd:string;
		public openType:number;
	}

	export class AssertsFont {
		public LIBAO:AssertsFontNode;
		public ZHENGSHU:AssertsFontNode;
		public BLUE:AssertsFontNode;
		public FANLI:AssertsFontNode;
		public RANK:AssertsFontNode;
		public JIAJINBI:AssertsFontNode;
		public VIPTEQUAN:AssertsFontNode;
		public VIPBIAOSHI:AssertsFontNode;
		public YLOW:AssertsFontNode;
		public DATINGSHUZI:AssertsFontNode;
		public VIPLIBAO:AssertsFontNode;
		public num1:AssertsFontNode;
		public DDZ:AssertsFontNode;
		public ZKWTZ:AssertsFontNode;
		public num4:AssertsFontNode;
		public YW:AssertsFontNode;
		public num3:AssertsFontNode;
		public num2:AssertsFontNode;
		public SKIN1:AssertsFontNode;
		public BIG:AssertsFontNode;
		public JINBISHUZI:AssertsFontNode;
		public VIPTQ:AssertsFontNode;
		public ZKBQWTZ:AssertsFontNode;
		public SPECIAL_OFFER:AssertsFontNode;
		public QIEYE:AssertsFontNode;
		public DATING:AssertsFontNode;
		public GB_VIP:AssertsFontNode;
		public FUSHU:AssertsFontNode;
		public BEISHU:AssertsFontNode;
		public MINGCI:AssertsFontNode;
		public SHENGPAO:AssertsFontNode;
		public SHUZI:AssertsFontNode;
		public BAOFU:AssertsFontNode;
		public YELLOWNEWBTN:AssertsFontNode;
	}

	export class AssertsFontNode {
		public name:string;
		public url:string;
	}

	export class Config {
		public url:ConfigUrl;
	}

	export class ConfigUrl {
		public ACTIVE_ANIM_URL:string;
		public SMALL_LOADING:string;
		public COIN_FORMAT:string;
		public DDZ_MATCH:string[];
		public TXT_FILTER_WORDS:string;
		public ACTIVE_ANIM:string;
		public COIN_BASE_FORMAT:string;
		public TAG_ANIM:Object;
		public TXT_FILTER_WORDS_HIGH:string;
		public DDZ_FIELD:string[];
		public TAG_FORMAT:string;
		public PROTOBUF:string[];
		public DDZ_ChuangGuan:string[];
		public TXT_FILTER_WORDS_NUM:string;
	}

	export class ErrorCode {
		public ERR_LIMIT_VIP:ErrorCodeNode;
		public ERR_CHUANG_GUAN_SCORES_SHORT:ErrorCodeNode;
		public ERR_EXPIRE_THEME:ErrorCodeNode;
		public ERR_PLEASE_BUY_BEFOR_GET:ErrorCodeNode;
		public ERR_TASK_REWARD_HAS_GET:ErrorCodeNode;
		public ERR_EXCHANGE_PHONE_CHARGE_ITEM_LIMIT:ErrorCodeNode;
		public ERR_NUM_LIMIT:ErrorCodeNode;
		public ERR_VIPHOLIDAYWELFARE_NOT_TRIGGER:ErrorCodeNode;
		public ERR_SUCCEED:ErrorCodeNode;
		public ERR_EXCHANGE_PHONE_CHARGE_COUNT_LIMIT:ErrorCodeNode;
		public ERR_LIMIT_MAX_GUN:ErrorCodeNode;
		public ERR_NODE_UNLOCK:ErrorCodeNode;
		public ERR_MORE_MONEY:ErrorCodeNode;
		public ERR_UNKNOW:ErrorCodeNode;
		public ERR_FOREVER_THEME:ErrorCodeNode;
		public ERR_IVNALID_ITEM:ErrorCodeNode;
		public ERR_LIMITGIFT_NOT_TRIGGER:ErrorCodeNode;
		public ERR_OVER_BILL_LIMIT:ErrorCodeNode;
		public ERR_ALREADY_GAIN:ErrorCodeNode;
		public ERR_DOLE_MONEY_NO_DATA:ErrorCodeNode;
		public ERR_USED_THEME:ErrorCodeNode;
		public ERR_BUY_PRE:ErrorCodeNode;
		public ERR_CHUANG_GUAN_NOT_FINISH:ErrorCodeNode;
		public ERR_UNFIND_FILED:ErrorCodeNode;
		public ERR_VIPHOLIDAYWELFARE_NOT_VIPLV:ErrorCodeNode;
		public ERR_DOU_BI_LIMIT:ErrorCodeNode;
		public ERR_EXCHANGE_PHONE_CHARGE_TOTAL_LIMIT:ErrorCodeNode;
		public ERR_BUY_BEFOR_BET:ErrorCodeNode;
		public ERR_LIMIT_CURRENCY:ErrorCodeNode;
		public ERR_MYSTERY_PACK_NOT_OPEN_BUY:ErrorCodeNode;
		public ERR_UNFIND_SKIN_SHOP_INDEX:ErrorCodeNode;
		public ERR_DOLE_MONEY_NO:ErrorCodeNode;
		public ERROR_ALREADY_GAIN:ErrorCodeNode;
		public ERR_EXCHANGE_LIMIT:ErrorCodeNode;
		public ERR_FIRST_RECHARGE_ALREADY_GAIN:ErrorCodeNode;
		public ERR_VIPHOLIDAYWELFARE_ALREADY_BUY:ErrorCodeNode;
		public ERR_NO_MATCH:ErrorCodeNode;
		public ERR_CHUANG_GUAN_CANNOT_RELIVE:ErrorCodeNode;
		public ERR_DOLE_MONEY_CD_LIMIT:ErrorCodeNode;
		public ERR_NOT_FOUND_ID:ErrorCodeNode;
		public ERR_CDKEY_ALREADY_EXCHANGE:ErrorCodeNode;
		public ERR_YUAN_XIAO_BUY_COUNT_USE_UP:ErrorCodeNode;
		public ERR_ACT_LUCKY_LOTTERY_COUNT_LIMIT:ErrorCodeNode;
		public ERR_LIMIT_COUNT:ErrorCodeNode;
		public ERR_UNACITVE_THEME:ErrorCodeNode;
		public ERR_ACT_LUCKY_LOTTERY_PLEASE_BUY:ErrorCodeNode;
		public ERR_CHUANG_GUAN_PASS_ALL:ErrorCodeNode;
		public ERR_MATCH_REWARD_GETED:ErrorCodeNode;
		public ERR_LIMIT_LEVEL:ErrorCodeNode;
		public ERR_LIMIT_TICKET:ErrorCodeNode;
		public ERR_MYSTERY_PACK_BUY_COUNT_USE_UP:ErrorCodeNode;
		public ERR_PRIVILEGE_ALREADY_GET:ErrorCodeNode;
		public ERR_LIMIT_ENOUGH_COUNT:ErrorCodeNode;
		public ERROR_DATA_NF:ErrorCodeNode;
		public ERR_BUYU_EXPERIENCE_COUNT_USE_UP:ErrorCodeNode;
		public ERR_USER_FREEZE:ErrorCodeNode;
		public ERR_MYSTERY_PACK_BUY_COUNT_LIMIT:ErrorCodeNode;
		public ERR_DAY_TIMES_NOT_ENOUGH:ErrorCodeNode;
		public ERR_DOLE_MONEY_ALREADY_GET:ErrorCodeNode;
		public ERR_CHUANG_GUAN_FREE_RELIVE_TIME_SHORT:ErrorCodeNode;
		public ERR_CHUANG_GUAN_FREE_START_TIME_SHORT:ErrorCodeNode;
		public ERR_PWD:ErrorCodeNode;
		public ERR_RANK_NO_DATA:ErrorCodeNode;
		public ERR_LIMIT_HAPPY_TICKET:ErrorCodeNode;
		public ERR_SERVICE_BUSY:ErrorCodeNode;
		public ERR_EXCHANGE:ErrorCodeNode;
		public ERR_SERVER_BUSY:ErrorCodeNode;
		public ERR_ACT_LUCKY_LOTTERY_POS_LIMIT:ErrorCodeNode;
		public ERR_ALREADY_BUY_TODAY:ErrorCodeNode;
		public ERR_BUY_PREVIOUS_GRADE_FIRST:ErrorCodeNode;
		public ERR_MATCH_NO_WEEK:ErrorCodeNode;
		public ERR_LIMIT_ITEM:ErrorCodeNode;
		public ERR_CHUANG_GUAN_EXCHANGE_UP:ErrorCodeNode;
		public ERR_USER_DAY_TIMES_NOT_ENOUGH:ErrorCodeNode;
		public ERR_YUAN_XIAO_BUY_COUNT_LIMIT:ErrorCodeNode;
		public ERR_ACTIVITY_UNOPEN:ErrorCodeNode;
		public ERR_SEA_GOD_TREASURE_EXCHANGE_TIME_LIMIT:ErrorCodeNode;
		public ERR_BLUE_VIP_GAIN:ErrorCodeNode;
		public ERR_NONE_MAIL_GAIN:ErrorCodeNode;
		public ERR_BUYU_EXPERIENCE_TIME_LIMIT:ErrorCodeNode;
		public ERR_INVALID_NODE:ErrorCodeNode;
		public ERR_BUY_PREVIOUS_FIRST:ErrorCodeNode;
		public ERR_INTEGRAL_LIMIT:ErrorCodeNode;
		public ERR_MATCH_CANT_ENTRY:ErrorCodeNode;
		public ERR_FIRST_RECHARGE:ErrorCodeNode;
		public ERR_ACT_LUCKY_LOTTERY_PLEASE_LOTTERY:ErrorCodeNode;
		public ERR_LIMIT_UNKONW:ErrorCodeNode;
		public ERR_DRAW_ELEVN_TIMES_NOT_ENOUGH:ErrorCodeNode;
		public ERR_LIMIT_MONEY:ErrorCodeNode;
		public ERR_CHUANG_GUAN_CANNOT_CONTINUE:ErrorCodeNode;
		public ERR_ID_NUM:ErrorCodeNode;
		public ERR_LIMITGIFT_ALREADY_BUY:ErrorCodeNode;
		public ERR_LIMIT_DIAMOND:ErrorCodeNode;
		public ERR_NONE_MAIL_DEL:ErrorCodeNode;
		public ERR_NUM:ErrorCodeNode;
		public ERR_TASK_NOT_FINISH:ErrorCodeNode;
		public ERR_CHUANG_GUAN_CANNOT_RESET:ErrorCodeNode;
		public ERR_YUAN_XIAO_NOT_OPEN_BUY:ErrorCodeNode;
		public ERR_FEEDBACK_CONTENT_NULL:ErrorCodeNode;
		public ERR_LIMIT_TIME:ErrorCodeNode;
		public ERR_LIMITGIFT_ALREADY_LIMIT:ErrorCodeNode;
		public ERR_MATCH_LIMIT_COUNT:ErrorCodeNode;
		public ERR_CHUANG_GUAN_EXCHANGE_COUNT_LIMIT:ErrorCodeNode;
		public ERR_MATCH_LOCK:ErrorCodeNode;
		public ERR_LUCK_TICKET_LIMIT:ErrorCodeNode;
		public ERR_NEAR_DAY_REFRESH_TIME:ErrorCodeNode;
		public ERR_CDKEY_ERROR:ErrorCodeNode;
		public ERR_NOT_IN_OPEN_TIME:ErrorCodeNode;
		public ERR_ID_IN_USE:ErrorCodeNode;
		public ERR_TASK_NOT_EXIST:ErrorCodeNode;
		public ERR_CHUANG_GUAN_NOT_GET_REWARD:ErrorCodeNode;
		public ERR_BUYU_EXPERIENCE_DOLE_MONEY_NOT_OVER:ErrorCodeNode;
		public ERR_ALREADY_BUY:ErrorCodeNode;
		public ERR_DOLE_MONEY_COUNT_LIMIT:ErrorCodeNode;
		public ERR_ITEM_LIMIT_GO_BUYU_PLEASE:ErrorCodeNode;
		public ERR_MATCH_NO_REWARDS:ErrorCodeNode;
	}

	export class ErrorCodeNode {
		public code:number;
		public des:string;
	}

	export class NickName {
		public fristName:string[];
		public secondName:string[];
	}

	export class CfgActDoubleEleven {
		public rds:CfgActDoubleElevenRds[];
		public buyLimit:number;
		public lotteryCost:number[];
		public weight:number[];
	}

	export class CfgActDoubleElevenRds {
		public img:string;
		public oldPrice:number;
		public price:number;
		public gameRewards:CfgGameReward[];
		public name:string;
		public poolNum:number;
		public id:number;
	}

	export class CfgActDuobao {
		public task:Object;
		public taskGroup:CfgActDuobaoTaskGroup[];
	}

	export class CfgActDuobaoTask {
		public finishTimes:number;
		public gameRewards:CfgGameReward[];
		public id:number;
	}

	export class CfgActDuobaoTaskGroup {
		public name:string;
		public id:number;
	}

	export class CfgActFestival {
		public drop:CfgActFestivalDrop;
		public turntable:CfgActFestivalTurntable;
		public exchange:CfgActFestivalExchange;
	}

	export class CfgActFestivalDrop {
		public gameRewards:CfgGameReward[];
		public weight:number[];
		public dropBase:number;
	}

	export class CfgActFestivalTurntable {
		public countLimit:number;
		public gameRewards:CfgGameReward[];
		public weight:number[];
		public costReward:CfgActFestivalTurntableCostReward[];
	}

	export class CfgActFestivalTurntableCostReward {
		public gameId:number;
		public itemId:number;
		public num:number;
		public type:number;
	}

	export class CfgActFestivalExchange {
		public countLimit:number[];
		public gameRewards:CfgGameReward[];
		public costReward:CfgActFestivalExchangeCostReward[];
	}

	export class CfgActFestivalExchangeCostReward {
		public gameId:number;
		public itemId:number;
		public num:number;
		public type:number;
	}

	export class CfgActHappyDouble {
		public duobaoPeer:number;
		public lotterys:CfgActHappyDoubleLotterys[];
		public TopMade:string;
	}

	export class CfgActHappyDoubleLotterys {
		public isOpen:number;
		public diamondNums:number[];
		public price:number;
		public diamondWeight:number[];
		public id:number;
		public luckyTicketWeight:number[];
		public luckyTicketNums:number[];
		public diamondCost:number[];
	}

	export class CfgActivityFestivalVipGift {
		public vipGifts:CfgActivityFestivalVipGiftVipGifts[];
	}

	export class CfgActivityFestivalVipGiftVipGifts {
		public oldPrice:number;
		public price:number;
		public gameRewards:CfgGameReward[];
		public buyTimes:number;
		public id:number;
		public vip:number;
	}

	export class CfgActivityLimitGift {
		public vipGifts:CfgActivityLimitGiftVipGifts[];
	}

	export class CfgActivityLimitGiftVipGifts {
		public oldPrice:number;
		public price:number;
		public gameRewards:CfgGameReward[];
		public buyTimes:number;
		public id:number;
		public vip:number[];
	}

	export class CfgActLittleGifts {
		public gifts:CfgActLittleGiftsGifts[];
	}

	export class CfgActLittleGiftsGifts {
		public oldPrice:number;
		public price:number;
		public gameRewards:CfgGameReward[];
		public id:number;
		public type:number;
		public vip:number[];
	}

	export class CfgActLittlePay {
		public moneyGive:CfgActLittlePayMoneyGive;
		public diamondGive:CfgActLittlePayDiamondGive;
		public giftPacks:CfgActLittlePayGiftPacks;
	}

	export class CfgActLittlePayMoneyGive {
		public vipTimes:number[];
		public gameReward:CfgGameReward[];
		public costMoney:number[];
	}

	export class CfgActLittlePayDiamondGive {
		public vipRewards:CfgActLittlePayDiamondGiveVipRewards[];
	}

	export class CfgActLittlePayDiamondGiveVipRewards {
		public gameId:number;
		public vipLevel:number;
		public itemId:number;
		public num:number;
		public type:number;
	}

	export class CfgActLittlePayGiftPacks {
		public price:number[];
		public gameRewards:Object;
	}

	export class CfgActLittlePayGiftPacksGameRewards {
		public gameId:number;
		public itemId:number;
		public num:number;
		public type:number;
	}

	export class CfgActLuckyDiscount {
		public rds:CfgActLuckyDiscountRds[];
		public lotteryCost:number[];
		public freeDiscount:number[];
		public weight:number[];
		public discount:number[];
		public freeWeight:number[];
	}

	export class CfgActLuckyDiscountRds {
		public price:number;
		public gameRewards:CfgGameReward[];
		public id:number;
	}

	export class CfgActLuckyLottery {
		public gift:CfgActLuckyLotteryGift;
		public gameRewards:CfgGameReward[];
		public weights:CfgActLuckyLotteryWeights[];
	}

	export class CfgActLuckyLotteryGift {
		public price:number;
		public gameRewards:CfgGameReward[];
		public buyCountLimit:number;
	}

	export class CfgActLuckyLotteryWeights {
		public weight:number[];
		public vip:number[];
	}

	export class CfgActMidAutumn {
		public littleGiftPacks:CfgActMidAutumnLittleGiftPacks;
		public moonCakeTasks:CfgActMidAutumnMoonCakeTasks[];
		public moonCake:CfgActMidAutumnMoonCake;
		public moonCakeExchange:CfgActMidAutumnMoonCakeExchange[];
		public bigGiftPacks:CfgActMidAutumnBigGiftPacks;
	}

	export class CfgActMidAutumnLittleGiftPacks {
		public price:number;
		public gameRewards:Object;
	}

	export class CfgActMidAutumnLittleGiftPacksGameRewards {
		public gameId:number;
		public itemId:number;
		public num:number;
		public type:number;
	}

	export class CfgActMidAutumnMoonCakeTasks {
		public taskType:number;
		public value1:number[];
		public gameRewards:CfgGameReward[];
		public id:number;
		public desc:string;
	}

	export class CfgActMidAutumnMoonCake {
		public dropItem:CfgActMidAutumnMoonCakeDropItem;
		public dropLimit:number[];
		public costMoney:number;
	}

	export class CfgActMidAutumnMoonCakeDropItem {
		public gameId:number;
		public itemId:number;
		public type:number;
	}

	export class CfgActMidAutumnMoonCakeExchange {
		public times:number;
		public gameReward:CfgGameReward;
		public id:number;
		public needItem:CfgActMidAutumnMoonCakeExchangeNeedItem;
	}

	export class CfgActMidAutumnMoonCakeExchangeNeedItem {
		public gameId:number;
		public itemId:number;
		public num:number;
		public type:number;
	}

	export class CfgActMidAutumnBigGiftPacks {
		public price:number;
		public gameRewards:Object;
	}

	export class CfgActMidAutumnBigGiftPacksGameRewards {
		public gameId:number;
		public itemId:number;
		public num:number;
		public type:number;
	}

	export class CfgActRedPacketWall {
		public global:CfgActRedPacketWallGlobal;
		public lotteryRewards:CfgActRedPacketWallLotteryRewards[];
	}

	export class CfgActRedPacketWallGlobal {
		public vipRevise:number[];
		public lastRedPacketReward:CfgActRedPacketWallGlobalLastRedPacketReward;
		public publicDayTimes:number;
		public refreshRedPacketWallTime:number;
		public luckyRankShowNum:number;
		public onceConsume:number;
		public addPoolNumOfElevenTimes:number;
		public openTimer:number;
		public leftTarget:number;
		public mailSubject:string;
		public elevenTimesConsue:number;
		public investmentScale:number;
		public addPoolNumOfOnce:number;
		public mailContent:string;
		public poolId:number;
		public baseReward:number;
		public personalDayTimes:number;
	}

	export class CfgActRedPacketWallGlobalLastRedPacketReward {
		public gameRewards:CfgGameReward[];
	}

	export class CfgActRedPacketWallLotteryRewards {
		public expect:number;
		public maxRewardNums:number[];
		public weights:number[];
		public items:CfgActRedPacketWallLotteryRewardsItems[];
	}

	export class CfgActRedPacketWallLotteryRewardsItems {
		public gameReward:CfgGameReward;
		public id:number;
		public isShow:number;
	}

	export class CfgActSelfOption {
		public gifts:CfgActSelfOptionGifts;
	}

	export class CfgActSelfOptionGifts {
		public selNum:number;
		public priceOne:number;
		public countOne:number;
		public price:number;
		public gameRewards:CfgGameReward[];
		public count:number;
		public selNumOne:number;
	}

	export class CfgActTimePack {
		public packet:CfgActTimePackPacket[];
		public desc:string;
	}

	export class CfgActTimePackPacket {
		public item:CfgActTimePackPacketItem[];
		public vipLimit:number[];
	}

	export class CfgActTimePackPacketItem {
		public titleImg:string;
		public useHintTxt:string;
		public gameReward:CfgGameReward;
		public buyHintImg:string;
		public price:number;
		public buyTimes:number;
		public iconImg:string;
		public id:number;
		public hot:number;
		public showMoney:number[];
		public rewardMoney:number;
	}

	export class CfgActWeekGifts {
		public week:CfgActWeekGiftsWeek[];
	}

	export class CfgActWeekGiftsWeek {
		public id:number;
		public gifts:CfgActWeekGiftsWeekGifts[];
	}

	export class CfgActWeekGiftsWeekGifts {
		public price:number;
		public gameRewards:CfgGameReward[];
		public id:number;
	}

	export class CfgActYuanXiao {
		public packet:CfgActYuanXiaoPacket[];
		public desc:string;
	}

	export class CfgActYuanXiaoPacket {
		public titleImg:string;
		public useHintTxt:string;
		public gameReward:CfgGameReward;
		public buyHintImg:string;
		public price:number;
		public buyTimes:number;
		public iconImg:string;
		public id:number;
		public hot:number;
		public showMoney:number[];
	}

	export class CfgActZhaYu {
		public rankReward:CfgActZhaYuRankReward[];
		public taskReward:CfgActZhaYuTaskReward[];
	}

	export class CfgActZhaYuRankReward {
		public gameId:number;
		public itemId:number;
		public endRank:number;
		public num:number;
		public startRank:number;
		public costMoney:number;
		public needPoints:number;
		public type:number;
	}

	export class CfgActZhaYuTaskReward {
		public gameRewards:CfgGameReward[];
		public boomId:CfgActZhaYuTaskRewardBoomId;
		public taskId:number;
		public points:number;
	}

	export class CfgActZhaYuTaskRewardBoomId {
		public gameId:number;
		public itemId:number;
		public type:number;
	}

	export class CfgBag {
		public showGameItem:CfgBagShowGameItem[];
	}

	export class CfgBagShowGameItem {
		public gameId:number;
		public id:number;
		public type:number;
	}

	export class CfgBaofulevel {
		public buyu:CfgBaofulevelNode;
		public sanguo:CfgBaofulevelNode;
		public doudizhu:CfgBaofulevelNode;
		public ddz:CfgBaofulevelNode;
		public champion:CfgBaofulevelNode;
	}

	export class CfgBaofulevelNode {
		public money:number[];
		public rate:number[];
	}

	export class CfgBase {
		public dollDefaultSpeed:number;
		public adSpace:number;
		public adTurnTime:number;
		public dollTurnSpeed:number;
		public dollTime:number;
		public probabilityAddr:string;
	}

	export class CfgBlueDiamond {
		public dailyRewards:CfgBlueDiamondDailyRewards[];
		public newReward:CfgBlueDiamondNewReward;
		public yearVipDailyReward:CfgBlueDiamondYearVipDailyReward;
		public superVipDailyReward:CfgBlueDiamondSuperVipDailyReward;
	}

	export class CfgBlueDiamondDailyRewards {
		public level:number;
		public gameRewards:CfgGameReward[];
	}

	export class CfgBlueDiamondNewReward {
		public gameRewards:CfgGameReward[];
		public title:string;
	}

	export class CfgBlueDiamondYearVipDailyReward {
		public gameRewards:CfgGameReward[];
		public title:string;
	}

	export class CfgBlueDiamondSuperVipDailyReward {
		public gameRewards:CfgGameReward[];
		public title:string;
	}

	export class CfgBroadcast {
		public Group:CfgBroadcastGroup[];
		public tvDesc:Object;
		public tvVipLimit:number;
		public gameName:Object;
		public pro:CfgBroadcastPro[];
		public closeTV:number;
		public desc:Object;
	}

	export class CfgBroadcastGroup {
		public name:string;
		public id:number;
	}

	export class CfgBroadcastPro {
		public type:number;
		public priority:number;
		public desc:string;
	}

	export class CfgBroadcastDesc {
		public fontSize:number;
		public text:string;
	}

	export class CfgChuangguan {
		public firstRewardGroup:number;
		public rewardsGroup:Object;
		public exchange:CfgChuangguanExchange[];
		public integralLimit:number;
		public dailyTimes:number;
		public dailyReliveTimes:number;
		public scoresRewardGroup:CfgChuangguanScoresRewardGroup[];
		public reliveDiamondCost:number;
		public roundsControl:CfgChuangguanRoundsControl[];
	}

	export class CfgChuangguanRewardsGroup {
		public gameReward:CfgGameReward;
		public weight:number;
		public id:number;
	}

	export class CfgChuangguanExchange {
		public reward:string;
		public weeklimit:number;
		public total:number;
		public need:number;
		public id:number;
		public title:string;
	}

	export class CfgChuangguanScoresRewardGroup {
		public scores:number;
		public idx:number;
		public rewardGroupId:number;
	}

	export class CfgChuangguanRoundsControl {
		public idx:number;
		public region:number[];
		public rounds:number;
	}

	export class CfgDole {
		public global:CfgDoleGlobal;
	}

	export class CfgDoleGlobal {
		public triggerNum:number;
		public getCD:number[];
	}

	export class CfgDoubiPath {
		public path:CfgDoubiPathPath[];
	}

	export class CfgDoubiPathPath {
		public des:string;
		public icon:string;
		public showGotoBtn:number;
		public id:number;
		public title:string;
		public funcId:number[];
	}

	export class CfgExchange {
		public itemName:string;
		public guides:string[];
		public bg:string;
		public price:number;
		public sucTip:string;
		public items:CfgExchangeItems[];
	}

	export class CfgExchangeItems {
		public itemName:string;
		public itemImg:string;
	}

	export class CfgField {
		public quick:Object;
		public field:Object;
	}

	export class CfgFieldField {
		public times:number[][];
		public name:string;
		public rang:number[];
		public url:string;
		public nums:number[][];
		public base:number;
	}

	export class CfgFirstrecharge {
		public gifts:CfgFirstrechargeGifts[];
	}

	export class CfgFirstrechargeGifts {
		public itemPos:number[];
		public btnUrl:number;
		public price:number;
		public oldPrice:number;
		public gameRewards:CfgGameReward[];
		public id:number;
	}

	export class CfgGameItem {
		public item:CfgGameItemItem[];
	}

	export class CfgGameItemItem {
		public gameId:number;
		public isUse:number;
		public gameRewards:CfgGameReward[];
		public name:string;
		public isGive:number;
		public icon:string;
		public weight:number[];
		public id:number;
		public type:number;
		public desc:string;
	}

	export class CfgGuide {
		public taskTip:string;
		public day:number;
		public tasks:CfgGuideTasks[];
	}

	export class CfgGuideTasks {
		public gameId:number;
		public gameRewards:CfgGameReward[];
		public cnd:number;
		public icon:string;
		public gp:number;
		public id:number;
		public type:number;
		public vip:number;
		public funcId:number;
		public desc:string;
	}

	export class CfgItem {
		public item:Object;
	}

	export class CfgItemItem {
		public name:string;
		public icon:string;
		public id:number;
		public type:number;
	}

	export class CfgLuckyTurntable {
		public countLimit:number[];
		public cost:number;
		public luckyTurntable:CfgLuckyTurntableLuckyTurntable[];
	}

	export class CfgLuckyTurntableLuckyTurntable {
		public gameRewards:CfgGameReward[];
		public weight:number[];
		public vip:number[];
	}

	export class CfgMatch {
		public CHUANG_GUAN:number;
		public GRIND_PRIX:number;
		public matchs:Object;
		public CRAZY:number;
		public jifenAnimPos:CfgMatchJifenAnimPos;
		public PVP:number;
		public ALL_PLAYER:number;
	}

	export class CfgMatchMatchs {
		public unlock:number[][];
		public gameNum:number;
		public isAllGameRank:boolean;
		public chuntianScore:number;
		public rule:CfgMatchMatchsRule;
		public baseScore:number;
		public replayMaxPlus:number;
		public dayShowRank:number;
		public replayPlus:number;
		public daySettlementTime:string;
		public multipleScore:CfgMatchMatchsMultipleScore;
		public dizhuScore:CfgMatchMatchsDizhuScore;
		public winPlus:number;
		public cardTypeScore:Object;
		public txt:CfgMatchMatchsTxt;
		public condition:Object[];
		public yazhiScore:CfgMatchMatchsYazhiScore;
		public dayRewards:CfgMatchMatchsDayRewards[];
		public openTime:number[][];
		public reocrdHoldDays:number;
		public repeatCost:number[];
		public freeCount:number;
		public repeatCount:number;
	}

	export class CfgMatchMatchsRule {
		public rewardTime:string;
		public unlock:string;
		public repeat:string;
		public detail:string;
	}

	export class CfgMatchMatchsMultipleScore {
		public zadan:number;
	}

	export class CfgMatchMatchsDizhuScore {
		public dizhu:number;
		public callRate:Object;
	}

	export class CfgMatchMatchsTxt {
		public mutilRankFormat:string;
		public rankTips:string[];
		public itemNameForamt:string;
		public rankReward:string;
		public replayPlus:string;
		public dayRank:string;
		public entry:string;
		public rankRecord:string;
		public noRank:string;
		public rankLabels:string[];
		public modeOpenTime:string;
		public dayScore:string;
		public openTime:string;
		public free:string;
		public replayCost:string;
		public unRank:string;
		public mutilRank:string;
	}

	export class CfgMatchMatchsYazhiScore {
		public dizhu:number;
		public beidong:number;
		public zhudong:number;
	}

	export class CfgMatchMatchsDayRewards {
		public gameRewards:CfgGameReward[];
		public rank:number[];
	}

	export class CfgMatchJifenAnimPos {
		public x:number;
		public y:number;
	}

	export class CfgNationalDayAct {
		public box:CfgNationalDayActBox[];
		public packs:CfgNationalDayActPacks[];
		public key:CfgNationalDayActKey;
		public tasks:CfgNationalDayActTasks[];
	}

	export class CfgNationalDayActBox {
		public times:number;
		public gameReward:CfgGameReward;
		public id:number;
		public needItem:CfgNationalDayActBoxNeedItem;
	}

	export class CfgNationalDayActBoxNeedItem {
		public gameId:number;
		public itemId:number;
		public num:number;
		public type:number;
	}

	export class CfgNationalDayActPacks {
		public price:number;
		public gameRewards:CfgGameReward[];
		public discount:string;
		public id:number;
	}

	export class CfgNationalDayActKey {
		public dropItem:CfgNationalDayActKeyDropItem;
		public dropLimit:number[];
		public costMoney:number;
	}

	export class CfgNationalDayActKeyDropItem {
		public gameId:number;
		public itemId:number;
		public type:number;
	}

	export class CfgNationalDayActTasks {
		public taskType:number;
		public value1:number[];
		public gameRewards:CfgGameReward[];
		public id:number;
		public desc:string;
	}

	export class CfgPrivilege {
		public privilegeDailyRewards:CfgPrivilegeNode;
		public privilegeGrowUpReward:CfgPrivilegeNode;
		public privilegeNewRewards:CfgPrivilegeNode;
	}

	export class CfgPrivilegeNode {
		public gameRewards:CfgGameReward[];
		public title:string;
		public type:number;
	}

	export class CfgRank {
		public rank:CfgRankRank[];
		public global:CfgRankGlobal;
	}

	export class CfgRankRank {
		public isRefresh:number;
		public des:string;
		public need:number;
		public spTime:number;
		public extraCdn:string;
		public num:number;
		public name:string;
		public refresh:string[];
		public funcId:number;
	}

	export class CfgRankGlobal {
		public refresh:string;
	}

	export class CfgRankImg {
		public gameImg:Object;
		public buyuNodeImg:Object;
	}

	export class CfgShop {
		public item:CfgShopItem[];
	}

	export class CfgShopItem {
		public item2:string;
		public item1:string;
		public des:string;
		public price:number;
		public name:string;
		public icon:string;
		public id:number;
		public type:number;
		public url:string;
	}

	export class CfgSkin {
		public game:CfgSkinGame[];
		public item:CfgSkinItem[];
		public shop:CfgSkinShop[];
		public shopTheme:number[];
		public theme:CfgSkinTheme[];
	}

	export class CfgSkinGame {
		public gameId:number;
		public name:string;
	}

	export class CfgSkinItem {
		public itemId:number;
		public icon:string;
		public themeId:number;
		public days:number;
	}

	export class CfgSkinShop {
		public itemId:number;
		public price:number[];
	}

	export class CfgSkinTheme {
		public gameId:number;
		public thumbnail:string;
		public name:string;
		public themeId:number;
		public type:number;
		public url:string;
	}

	export class CfgSound {
		public bg:string;
	}

	export class CfgTask {
		public task:Object;
		public taskRandPool:Object;
	}

	export class CfgTaskTask {
		public gameId:number;
		public taskType:number;
		public gameReward:CfgGameReward[];
		public taskIcon:string;
		public finish:CfgTaskTaskFinish;
		public state:number;
		public trigger:CfgTaskTaskTrigger;
		public taskId:number;
		public desc:string;
	}

	export class CfgTaskTaskFinish {
		public parameter:number[];
		public type:number;
		public value:number;
	}

	export class CfgTaskTaskTrigger {
		public parameter:number[];
		public triggerType:number;
		public value:number;
	}

	export class CfgTaskTaskRandPool {
		public weight:number;
		public taskId:number;
	}

	export class CfgTips {
		public gameItem:Object;
	}

	export class CfgVip {
		public makeUp:CfgVipMakeUp[];
		public node:CfgVipNode[];
	}

	export class CfgVipMakeUp {
		public dailyAddCards:number;
		public gameRewards:CfgGameReward[];
		public vipLv:number;
		public dailyAddCoins:number;
	}

	export class CfgVipNode {
		public privilegeAdUrl:string;
		public unlockProp:boolean;
		public rechangeRebate:number;
		public level:number;
		public privilegeAdDes:string;
		public raiseProbFishRate:number;
		public grabLimit:number;
		public absRechangeRebate:number;
		public shopBuyBillAdd:number;
		public dailyAddArtilleryProps:number;
		public privilegeName:string;
		public unlockDoll:boolean;
		public des:string;
		public doleMoney:number;
		public privilegeUrl:string;
		public upperLimit:number;
		public exp:number;
		public freeGrabnum:number;
		public unlockWarhead:boolean;
		public raiseSubmarieWarheadFallRate:number;
	}

	export class Text {
		public currency_now_tip:string;
		public currency_ceiling_tip:string;
		public activityWeekGifts1:string;
		public unlockDes:string;
		public countLabel:string;
		public emptyBuyuBag:string;
		public active:string;
		public pvp:string;
		public makeupItemLabel:string;
		public dollTip:string;
		public maintenanceDes:string;
		public limit_gift_rule:string;
		public autoTxt:string;
		public crazy:string;
		public rank_tip:string;
		public lucky_dole_money_alert:string;
		public ddzChuangGuan:string;
		public specialOfferCount:string;
		public activitySelfOption1:string;
		public spCost:string;
		public label_confirm:string;
		public spGunNum:string;
		public itemNum:string;
		public actZhaDan1:string;
		public doubleEleven1:string;
		public allPlayer:string;
		public lock_tip:string;
		public ddzNormal:string;
		public vip_holiday_welfare:string;
		public antiTip2:string;
		public antiTip1:string;
		public antiTip3:string;
		public curIntegral:string;
		public dollFree2:string;
		public dollFree1:string;
		public actFestival:string;
		public unhave:string;
		public limitVipTicket:string;
		public frdMailTitle:string;
		public goto_buyu_tyc_tip:string;
		public activityTime:string;
		public getSkin:string;
		public act_grand_slam_tip:string;
		public doel_money_count_limit:string;
		public dollprompt:string;
		public existDDZRoom:string;
		public addTime:string;
		public goldLimitTip1:string;
		public use:string;
		public goldLimitTip2:string;
		public red_packet_wall_tip1:string;
		public red_packet_wall_tip2:string;
		public vipDes3:string;
		public vipDes4:string;
		public vipDes1:string;
		public doubiPathTaskDesc:string;
		public vipDes2:string;
		public red_packet_wall_rule:string;
		public nRank:string;
		public activityOver:string;
		public ddzChuangGuanTip1:string;
		public act_grand_slam_record:string;
		public all:string;
		public oldGameDes:string;
		public conditionReward1:string;
		public duobao_tip:string;
		public selectSkinShop:string;
		public activityCDkeyRule:string;
		public antiLoginTip:string;
		public doubleEleven3:string;
		public doubleEleven2:string;
		public qqGroup:string;
		public luckyDrawDes2:string;
		public act_buyu_duobao_rule:string;
		public luckyDrawDes3:string;
		public tripleProValue:string;
		public luckyDrawDes1:string;
		public label_cancel:string;
		public grandPrix:string;
		public canActive:string;
		public doubiPathMatchDesc:string;
		public waiting:string;
		public originalPrice:string;
		public dollRule:string;
		public nDays:string;
		public doel_money_no:string;
		public selectSkinItem:string;
		public remainDays:string;
		public activityBuYu1:string;
		public doubiPathDesc:string;
		public transBuyu:string;
		public conditionRewardTitle1:string;
		public dollTime2:string;
		public dollTime1:string;
		public nSheet:string;
		public act_grand_slam_count:string;
		public limit_gift_num:string;
		public emptyBag:string;
		public forever:string;
		public hallGuide5:string;
		public idFormat:string;
		public hallGuide6:string;
	}

	export class ConfigParse {
		public static asserts:Asserts;
		public static config:Config;
		public static errorCode:ErrorCode;
		public static nickName:NickName;
		public static cfgActDoubleEleven:CfgActDoubleEleven;
		public static cfgActDuobao:CfgActDuobao;
		public static cfgActFestival:CfgActFestival;
		public static cfgActHappyDouble:CfgActHappyDouble;
		public static cfgActivityFestivalVipGift:CfgActivityFestivalVipGift;
		public static cfgActivityLimitGift:CfgActivityLimitGift;
		public static cfgActLittleGifts:CfgActLittleGifts;
		public static cfgActLittlePay:CfgActLittlePay;
		public static cfgActLuckyDiscount:CfgActLuckyDiscount;
		public static cfgActLuckyLottery:CfgActLuckyLottery;
		public static cfgActMidAutumn:CfgActMidAutumn;
		public static cfgActRedPacketWall:CfgActRedPacketWall;
		public static cfgActSelfOption:CfgActSelfOption;
		public static cfgActTimePack:CfgActTimePack;
		public static cfgActWeekGifts:CfgActWeekGifts;
		public static cfgActYuanXiao:CfgActYuanXiao;
		public static cfgActZhaYu:CfgActZhaYu;
		public static cfgBag:CfgBag;
		public static cfgBaofulevel:CfgBaofulevel;
		public static cfgBase:CfgBase;
		public static cfgBlueDiamond:CfgBlueDiamond;
		public static cfgBroadcast:CfgBroadcast;
		public static cfgChuangguan:CfgChuangguan;
		public static cfgDole:CfgDole;
		public static cfgDoubiPath:CfgDoubiPath;
		public static cfgExchange:CfgExchange;
		public static cfgField:CfgField;
		public static cfgFirstrecharge:CfgFirstrecharge;
		public static cfgGameItem:CfgGameItem;
		public static cfgGuide:CfgGuide;
		public static cfgItem:CfgItem;
		public static cfgLuckyTurntable:CfgLuckyTurntable;
		public static cfgMatch:CfgMatch;
		public static cfgNationalDayAct:CfgNationalDayAct;
		public static cfgPrivilege:CfgPrivilege;
		public static cfgRank:CfgRank;
		public static cfgRankImg:CfgRankImg;
		public static cfgShop:CfgShop;
		public static cfgSkin:CfgSkin;
		public static cfgSound:CfgSound;
		public static cfgTask:CfgTask;
		public static cfgTips:CfgTips;
		public static cfgVip:CfgVip;
		public static text:Text;
		private static readonly reg = /\/\/.*|\/\*(\s|.)*?\*\//g;

		public static minify(str:string):string{
			str = str.replace(/:\/\//g, ":\\/\\/");
			return str.replace(ConfigParse.reg, "");
		}

		public static init(complete:Handler = null, progess:Handler = null):void {
			Laya.loader.load([
				{url:"res/cfg/base/asserts.json", type:Loader.TEXT},
				{url:"res/cfg/base/config.json", type:Loader.TEXT},
				{url:"res/cfg/base/errorCode.json", type:Loader.TEXT},
				{url:"res/cfg/base/nickName.json", type:Loader.TEXT},
				{url:"res/cfg/base/scripts/actDoubleEleven.json", type:Loader.TEXT},
				{url:"res/cfg/base/scripts/actDuobao.json", type:Loader.TEXT},
				{url:"res/cfg/base/scripts/actFestival.json", type:Loader.TEXT},
				{url:"res/cfg/base/scripts/actHappyDouble.json", type:Loader.TEXT},
				{url:"res/cfg/base/scripts/activityFestivalVipGift.json", type:Loader.TEXT},
				{url:"res/cfg/base/scripts/activityLimitGift.json", type:Loader.TEXT},
				{url:"res/cfg/base/scripts/actLittleGifts.json", type:Loader.TEXT},
				{url:"res/cfg/base/scripts/actLittlePay.json", type:Loader.TEXT},
				{url:"res/cfg/base/scripts/actLuckyDiscount.json", type:Loader.TEXT},
				{url:"res/cfg/base/scripts/actLuckyLottery.json", type:Loader.TEXT},
				{url:"res/cfg/base/scripts/actMidAutumn.json", type:Loader.TEXT},
				{url:"res/cfg/base/scripts/actRedPacketWall.json", type:Loader.TEXT},
				{url:"res/cfg/base/scripts/actSelfOption.json", type:Loader.TEXT},
				{url:"res/cfg/base/scripts/actTimePack.json", type:Loader.TEXT},
				{url:"res/cfg/base/scripts/actWeekGifts.json", type:Loader.TEXT},
				{url:"res/cfg/base/scripts/actYuanXiao.json", type:Loader.TEXT},
				{url:"res/cfg/base/scripts/actZhaYu.json", type:Loader.TEXT},
				{url:"res/cfg/base/scripts/bag.json", type:Loader.TEXT},
				{url:"res/cfg/base/scripts/baofulevel.json", type:Loader.TEXT},
				{url:"res/cfg/base/scripts/base.json", type:Loader.TEXT},
				{url:"res/cfg/base/scripts/blueDiamond.json", type:Loader.TEXT},
				{url:"res/cfg/base/scripts/broadcast.json", type:Loader.TEXT},
				{url:"res/cfg/base/scripts/chuangguan.json", type:Loader.TEXT},
				{url:"res/cfg/base/scripts/dole.json", type:Loader.TEXT},
				{url:"res/cfg/base/scripts/doubiPath.json", type:Loader.TEXT},
				{url:"res/cfg/base/scripts/exchange.json", type:Loader.TEXT},
				{url:"res/cfg/base/scripts/field.json", type:Loader.TEXT},
				{url:"res/cfg/base/scripts/firstrecharge.json", type:Loader.TEXT},
				{url:"res/cfg/base/scripts/gameItem.json", type:Loader.TEXT},
				{url:"res/cfg/base/scripts/guide.json", type:Loader.TEXT},
				{url:"res/cfg/base/scripts/item.json", type:Loader.TEXT},
				{url:"res/cfg/base/scripts/luckyTurntable.json", type:Loader.TEXT},
				{url:"res/cfg/base/scripts/match.json", type:Loader.TEXT},
				{url:"res/cfg/base/scripts/nationalDayAct.json", type:Loader.TEXT},
				{url:"res/cfg/base/scripts/privilege.json", type:Loader.TEXT},
				{url:"res/cfg/base/scripts/rank.json", type:Loader.TEXT},
				{url:"res/cfg/base/scripts/rankImg.json", type:Loader.TEXT},
				{url:"res/cfg/base/scripts/shop.json", type:Loader.TEXT},
				{url:"res/cfg/base/scripts/skin.json", type:Loader.TEXT},
				{url:"res/cfg/base/scripts/sound.json", type:Loader.TEXT},
				{url:"res/cfg/base/scripts/task.json", type:Loader.TEXT},
				{url:"res/cfg/base/scripts/tips.json", type:Loader.TEXT},
				{url:"res/cfg/base/scripts/vip.json", type:Loader.TEXT},
				{url:"res/cfg/base/text.json", type:Loader.TEXT},
			], Handler.create(null, ConfigParse.onComplete, [complete]), progess);
		}

		public static onComplete(complete:Handler):void {
			game.cfg.ConfigParse.asserts = (<Asserts>JSON.parse(ConfigParse.minify(Laya.loader.getRes("res/cfg/base/asserts.json"))))
			game.cfg.ConfigParse.config = (<Config>JSON.parse(ConfigParse.minify(Laya.loader.getRes("res/cfg/base/config.json"))))
			game.cfg.ConfigParse.errorCode = (<ErrorCode>JSON.parse(ConfigParse.minify(Laya.loader.getRes("res/cfg/base/errorCode.json"))))
			game.cfg.ConfigParse.nickName = (<NickName>JSON.parse(ConfigParse.minify(Laya.loader.getRes("res/cfg/base/nickName.json"))))
			game.cfg.ConfigParse.cfgActDoubleEleven = (<CfgActDoubleEleven>JSON.parse(ConfigParse.minify(Laya.loader.getRes("res/cfg/base/scripts/actDoubleEleven.json"))))
			game.cfg.ConfigParse.cfgActDuobao = (<CfgActDuobao>JSON.parse(ConfigParse.minify(Laya.loader.getRes("res/cfg/base/scripts/actDuobao.json"))))
			game.cfg.ConfigParse.cfgActFestival = (<CfgActFestival>JSON.parse(ConfigParse.minify(Laya.loader.getRes("res/cfg/base/scripts/actFestival.json"))))
			game.cfg.ConfigParse.cfgActHappyDouble = (<CfgActHappyDouble>JSON.parse(ConfigParse.minify(Laya.loader.getRes("res/cfg/base/scripts/actHappyDouble.json"))))
			game.cfg.ConfigParse.cfgActivityFestivalVipGift = (<CfgActivityFestivalVipGift>JSON.parse(ConfigParse.minify(Laya.loader.getRes("res/cfg/base/scripts/activityFestivalVipGift.json"))))
			game.cfg.ConfigParse.cfgActivityLimitGift = (<CfgActivityLimitGift>JSON.parse(ConfigParse.minify(Laya.loader.getRes("res/cfg/base/scripts/activityLimitGift.json"))))
			game.cfg.ConfigParse.cfgActLittleGifts = (<CfgActLittleGifts>JSON.parse(ConfigParse.minify(Laya.loader.getRes("res/cfg/base/scripts/actLittleGifts.json"))))
			game.cfg.ConfigParse.cfgActLittlePay = (<CfgActLittlePay>JSON.parse(ConfigParse.minify(Laya.loader.getRes("res/cfg/base/scripts/actLittlePay.json"))))
			game.cfg.ConfigParse.cfgActLuckyDiscount = (<CfgActLuckyDiscount>JSON.parse(ConfigParse.minify(Laya.loader.getRes("res/cfg/base/scripts/actLuckyDiscount.json"))))
			game.cfg.ConfigParse.cfgActLuckyLottery = (<CfgActLuckyLottery>JSON.parse(ConfigParse.minify(Laya.loader.getRes("res/cfg/base/scripts/actLuckyLottery.json"))))
			game.cfg.ConfigParse.cfgActMidAutumn = (<CfgActMidAutumn>JSON.parse(ConfigParse.minify(Laya.loader.getRes("res/cfg/base/scripts/actMidAutumn.json"))))
			game.cfg.ConfigParse.cfgActRedPacketWall = (<CfgActRedPacketWall>JSON.parse(ConfigParse.minify(Laya.loader.getRes("res/cfg/base/scripts/actRedPacketWall.json"))))
			game.cfg.ConfigParse.cfgActSelfOption = (<CfgActSelfOption>JSON.parse(ConfigParse.minify(Laya.loader.getRes("res/cfg/base/scripts/actSelfOption.json"))))
			game.cfg.ConfigParse.cfgActTimePack = (<CfgActTimePack>JSON.parse(ConfigParse.minify(Laya.loader.getRes("res/cfg/base/scripts/actTimePack.json"))))
			game.cfg.ConfigParse.cfgActWeekGifts = (<CfgActWeekGifts>JSON.parse(ConfigParse.minify(Laya.loader.getRes("res/cfg/base/scripts/actWeekGifts.json"))))
			game.cfg.ConfigParse.cfgActYuanXiao = (<CfgActYuanXiao>JSON.parse(ConfigParse.minify(Laya.loader.getRes("res/cfg/base/scripts/actYuanXiao.json"))))
			game.cfg.ConfigParse.cfgActZhaYu = (<CfgActZhaYu>JSON.parse(ConfigParse.minify(Laya.loader.getRes("res/cfg/base/scripts/actZhaYu.json"))))
			game.cfg.ConfigParse.cfgBag = (<CfgBag>JSON.parse(ConfigParse.minify(Laya.loader.getRes("res/cfg/base/scripts/bag.json"))))
			game.cfg.ConfigParse.cfgBaofulevel = (<CfgBaofulevel>JSON.parse(ConfigParse.minify(Laya.loader.getRes("res/cfg/base/scripts/baofulevel.json"))))
			game.cfg.ConfigParse.cfgBase = (<CfgBase>JSON.parse(ConfigParse.minify(Laya.loader.getRes("res/cfg/base/scripts/base.json"))))
			game.cfg.ConfigParse.cfgBlueDiamond = (<CfgBlueDiamond>JSON.parse(ConfigParse.minify(Laya.loader.getRes("res/cfg/base/scripts/blueDiamond.json"))))
			game.cfg.ConfigParse.cfgBroadcast = (<CfgBroadcast>JSON.parse(ConfigParse.minify(Laya.loader.getRes("res/cfg/base/scripts/broadcast.json"))))
			game.cfg.ConfigParse.cfgChuangguan = (<CfgChuangguan>JSON.parse(ConfigParse.minify(Laya.loader.getRes("res/cfg/base/scripts/chuangguan.json"))))
			game.cfg.ConfigParse.cfgDole = (<CfgDole>JSON.parse(ConfigParse.minify(Laya.loader.getRes("res/cfg/base/scripts/dole.json"))))
			game.cfg.ConfigParse.cfgDoubiPath = (<CfgDoubiPath>JSON.parse(ConfigParse.minify(Laya.loader.getRes("res/cfg/base/scripts/doubiPath.json"))))
			game.cfg.ConfigParse.cfgExchange = (<CfgExchange>JSON.parse(ConfigParse.minify(Laya.loader.getRes("res/cfg/base/scripts/exchange.json"))))
			game.cfg.ConfigParse.cfgField = (<CfgField>JSON.parse(ConfigParse.minify(Laya.loader.getRes("res/cfg/base/scripts/field.json"))))
			game.cfg.ConfigParse.cfgFirstrecharge = (<CfgFirstrecharge>JSON.parse(ConfigParse.minify(Laya.loader.getRes("res/cfg/base/scripts/firstrecharge.json"))))
			game.cfg.ConfigParse.cfgGameItem = (<CfgGameItem>JSON.parse(ConfigParse.minify(Laya.loader.getRes("res/cfg/base/scripts/gameItem.json"))))
			game.cfg.ConfigParse.cfgGuide = (<CfgGuide>JSON.parse(ConfigParse.minify(Laya.loader.getRes("res/cfg/base/scripts/guide.json"))))
			game.cfg.ConfigParse.cfgItem = (<CfgItem>JSON.parse(ConfigParse.minify(Laya.loader.getRes("res/cfg/base/scripts/item.json"))))
			game.cfg.ConfigParse.cfgLuckyTurntable = (<CfgLuckyTurntable>JSON.parse(ConfigParse.minify(Laya.loader.getRes("res/cfg/base/scripts/luckyTurntable.json"))))
			game.cfg.ConfigParse.cfgMatch = (<CfgMatch>JSON.parse(ConfigParse.minify(Laya.loader.getRes("res/cfg/base/scripts/match.json"))))
			game.cfg.ConfigParse.cfgNationalDayAct = (<CfgNationalDayAct>JSON.parse(ConfigParse.minify(Laya.loader.getRes("res/cfg/base/scripts/nationalDayAct.json"))))
			game.cfg.ConfigParse.cfgPrivilege = (<CfgPrivilege>JSON.parse(ConfigParse.minify(Laya.loader.getRes("res/cfg/base/scripts/privilege.json"))))
			game.cfg.ConfigParse.cfgRank = (<CfgRank>JSON.parse(ConfigParse.minify(Laya.loader.getRes("res/cfg/base/scripts/rank.json"))))
			game.cfg.ConfigParse.cfgRankImg = (<CfgRankImg>JSON.parse(ConfigParse.minify(Laya.loader.getRes("res/cfg/base/scripts/rankImg.json"))))
			game.cfg.ConfigParse.cfgShop = (<CfgShop>JSON.parse(ConfigParse.minify(Laya.loader.getRes("res/cfg/base/scripts/shop.json"))))
			game.cfg.ConfigParse.cfgSkin = (<CfgSkin>JSON.parse(ConfigParse.minify(Laya.loader.getRes("res/cfg/base/scripts/skin.json"))))
			game.cfg.ConfigParse.cfgSound = (<CfgSound>JSON.parse(ConfigParse.minify(Laya.loader.getRes("res/cfg/base/scripts/sound.json"))))
			game.cfg.ConfigParse.cfgTask = (<CfgTask>JSON.parse(ConfigParse.minify(Laya.loader.getRes("res/cfg/base/scripts/task.json"))))
			game.cfg.ConfigParse.cfgTips = (<CfgTips>JSON.parse(ConfigParse.minify(Laya.loader.getRes("res/cfg/base/scripts/tips.json"))))
			game.cfg.ConfigParse.cfgVip = (<CfgVip>JSON.parse(ConfigParse.minify(Laya.loader.getRes("res/cfg/base/scripts/vip.json"))))
			game.cfg.ConfigParse.text = (<Text>JSON.parse(ConfigParse.minify(Laya.loader.getRes("res/cfg/base/text.json"))))
			if(complete)complete.run();
		}
	}
}