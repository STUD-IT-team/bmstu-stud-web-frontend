export const User = {
  id: String,
  name: String,
  email: String,
  tg: String,
  vk: String,
}

export const Feed = {
  id: Number,
  title: String,
  description: String,
  media: Object,
  registration_url: {
    type: String,
    required: false,
  },
  created_by: Number,
  updated_at: Date,
  created_at: Date,
}

export const Feeds = {
  feed: {
    type: Array,
    item: Feed,
  }
}

export const Event = {
  id: Number,
  description: String,
  date: Date,
  approved: Boolean,
  created_at: Date,
  reg_url: {
    type: String,
    required: false,
  },
  reg_open_date: {
    type: Date,
    required: false,
  },
  feedback_url: {
    type: String,
    required: false,
  }
}

export const Events = {
  events: {
    type: Array,
    item: Event,
  }
}
