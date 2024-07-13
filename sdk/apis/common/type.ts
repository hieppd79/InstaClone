export interface User {
  account_badges: any[];
  can_see_quiet_post_attribution: boolean;
  fan_club_info: {
    autosave_to_exclusive_highlight: any;
    connected_member_count: any;
    fan_club_id: any;
    fan_club_name: any;
    fan_consideration_page_revamp_eligiblity: any;
    has_enough_subscribers_for_ssc: any;
    is_fan_club_gifting_eligible: any;
    is_fan_club_referral_eligible: any;
    subscriber_count: any;
  };
  fbid_v2: number;
  feed_post_reshare_disabled: boolean;
  full_name: string;
  has_anonymous_profile_picture: boolean;
  id: string;
  is_favorite: boolean;
  is_private: boolean;
  is_unpublished: boolean;
  is_verified: boolean;
  profile_pic_id: string;
  profile_pic_url: string;
  show_account_transparency_details: boolean;
  third_party_downloads_enabled: number;
  transparency_product_enabled: boolean;
  username: string;
}

export interface Caption {
  content_type: string;
  created_at: number;
  created_at_utc: number;
  did_report_as_spam: boolean;
  hashtags: any[];
  id: string;
  is_covered: boolean;
  is_ranked_comment: boolean;
  mentions: any[];
  private_reply_status: number;
  share_enabled: boolean;
  text: string;
  type: number;
  user: User;
  user_id: string;
}

export interface ImageVersion {
  height: number;
  url: string;
  width: number;
}

export interface Media {
  carousel_parent_id: string;
  commerciality_status: string;
  explore_pivot_grid: boolean;
  fb_user_tags: {
    in: any[];
  };
  featured_products: any[];
  id: string;
  image_versions: {
    items: ImageVersion[];
  };
  is_video: boolean;
  location: any;
  media_name: string;
  media_type: number;
  original_height: number;
  original_width: number;
  product_suggestions: any[];
  product_type: string;
  sharing_friction_info: {
    bloks_app_url: any;
    sharing_friction_payload: any;
    should_have_sharing_friction: boolean;
  };
  shop_routing_user_id: any;
  sponsor_tags: any[];
  tagged_users: any[];
  taken_at: number;
  taken_at_ts: number;
  thumbnail_url: string;
  has_audio?: boolean;
  scrubber_spritesheet_info_candidates?: any;
  is_dash_eligible?: number;
  number_of_qualities?: number;
  video_codec?: string;
  video_duration?: number;
  video_url?: string;
  video_versions?: {
    height: number;
    id: string;
    type: number;
    url: string;
    width: number;
  }[];
}

export interface MusicMetadata {
  audio_canonical_id: string;
  audio_type: any;
  music_info: any;
  original_sound_info: any;
  pinned_media_ids: any;
}

export interface Post {
  boost_unavailable_identifier: any;
  boost_unavailable_reason: any;
  can_reshare: boolean;
  can_save: boolean;
  caption: Caption;
  caption_is_edited: boolean;
  carousel_media: Media[];
  carousel_media_count: number;
  carousel_media_ids: number[];
  carousel_media_pending_post_count: number;
  clips_tab_pinned_user_ids: any[];
  coauthor_producers: any[];
  code: string;
  comment_count: number;
  comment_inform_treatment: {
    action_type: any;
    should_have_inform_treatment: boolean;
    text: string;
    url: any;
  };
  comment_threading_enabled: boolean;
  commerciality_status: string;
  deleted_reason: number;
  device_timestamp: number;
  fb_aggregated_comment_count: number;
  fb_aggregated_like_count: number;
  fb_user_tags: {
    in: any[];
  };
  fbid: string;
  featured_products: any[];
  filter_type: number;
  fundraiser_tag: {
    has_standalone_fundraiser: boolean;
  };
  has_liked: boolean;
  has_more_comments: boolean;
  has_privately_liked: boolean;
  has_shared_to_fb: number;
  id: string;
  ig_media_sharing_disabled: boolean;
  igbio_product: any;
  image_versions: {
    items: ImageVersion[];
  };
  inline_composer_display_condition: string;
  inline_composer_imp_trigger_time: number;
  integrity_review_decision: string;
  invited_coauthor_producers: any[];
  is_auto_created: boolean;
  is_comments_gif_composer_enabled: boolean;
  is_cutout_sticker_allowed: boolean;
  is_eligible_for_media_note_recs_nux: boolean;
  is_in_profile_grid: boolean;
  is_open_to_public_submission: boolean;
  is_organic_product_tagging_eligible: boolean;
  is_paid_partnership: boolean;
  is_pinned: boolean;
  is_post_live_clips_media: boolean;
  is_quiet_post: boolean;
  is_reshare_of_text_post_app_media_in_ig: boolean;
  is_reuse_allowed: boolean;
  is_social_ufi_disabled: boolean;
  is_tagged_media_shared_to_viewer_profile_grid: boolean;
  is_unified_video: boolean;
  is_video: boolean;
  like_and_view_counts_disabled: boolean;
  like_count: number;
  location: any;
  max_num_visible_preview_comments: number;
  media_name: string;
  media_type: number;
  mezql_token: string;
  music_metadata: MusicMetadata;
  open_carousel_show_follow_button: boolean;
  open_carousel_submission_state: string;
  original_height: number;
  original_width: number;
  owner: User;
  preview_comments: any[];
  product_suggestions: any[];
  product_type: string;
  share_count_disabled: boolean;
  sharing_friction_info: {
    bloks_app_url: any;
    sharing_friction_payload: any;
    should_have_sharing_friction: boolean;
  };
  shop_routing_user_id: any;
  should_show_author_pog_for_tagged_media_shared_to_profile_grid: boolean;
  social_context: any[];
  sponsor_tags: any[];
  subscribe_cta_visible: boolean;
  tagged_users: any[];
  taken_at: number;
  taken_at_ts: number;
  thumbnail_url: string;
  timeline_pinned_user_ids: number[];
  top_likers: any[];
  user: User;
}
