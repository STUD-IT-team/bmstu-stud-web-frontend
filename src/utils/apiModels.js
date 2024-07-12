export const Media = {
  type: Object,
  fields: {
    id: Number,
    key: String,
    name: String,
  }
}

export const User = {
  id: String,
  name: String,
  email: String,
  tg: String,
  vk: String,
}

export const Feed = {
  feed: {
    type: Array,
    item: {
      type: Object,
      fields: {
        approved: Boolean,
        created_at: String,
        created_by: Number,
        description: String,
        id: Number,
        media: Media,
        title: String,
        updated_at: String,
        views: Number,
        vk_post_url: String,
      }
    }
  }
}

export const Encounters = {
  encounter: {
    type: Array,
    item: {
      type: Object,
      fields: {
        club_id: Number,
        count: String,
        description: String,
        id: Number,
      }
    }
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

export const StudNumber = {
  num: String,
  description: String,
}

export const StudNumbers = {
  studNumbers: {
    type: Array,
    item: StudNumber,
  }
}

export const Club = {
  title: String,
  imgUrl: String,
  redirectLink: String,
}

export const ClubsList = {
  clubsList: {
    type: Array,
    item: Club,
  }
}

export const StudBigNew = {
  title: String,
  description: String,
  imgUrl: String,
  redirectLink: String,
}

export const StudBigNews = {
  studNumbers: {
    type: Array,
    item: StudBigNew,
  }
}
