// ----------------------------------------------------------------------

import { apply } from "file-loader"

// req: get /club/media/{club_id}
export const Media = {
  media: {
    type: Object,
    fields: {
      id: Number,
      name: String,
      key: String,
      // ref_number: Number
    }
  }
}
// ----------------------------------------------------------------------
// req: get /clubs /clubs/search /clubs/type 

export const Clubs = {
  clubs: {
    type: Array,
    item: {
      type: Object,
      fields: {
        description: String,
        id: Number,
        logo: Media.media, // id key name
        name: String,
        orgs: { //Глава организации
          type: Array,
          item: {
            type: Object,
            fields: {
              id: Number,
              name: String,
              spec: String,
            },
          }
        },
        short_name: String,
        tg_url: String,
        type: String, //Тип - отряд, клуб и тд
        vk_url: String,
      }
    }
  }
}

// ----------------------------------------------------------------------
// params
export const MainOrg = {
  type: Object,
  fields: {
    id: Number,
    image: Media.media, // Фото человека
    name: String, // Фамилия Имя
    role_name: String, //Название должности (председатель и тд)
    spec: String, // Описание
    tg_url: String,
    vk_url: String,
  }
}
export const SubOrg = {
  type: Object,
  fields: {
    id: Number,
    image: Media.media, // Фото человека
    name: String, // Фамилия Имя
    sub_club_name: String, //Название должности (председатель и тд)
    spec: String, // Описание
    tg_url: String,
    vk_url: String,
  }
}

// ----------------------------------------------------------------------
// req: get /clubs/members/{club_id}

export const Members = {
  main_orgs: {
    type: Array,
    item: MainOrg,
  },

  sub_orgs: {
    type: Array,
    item: SubOrg,
  }
}

// ----------------------------------------------------------------------
// req: get /clubs/{club_id}
export const Club = {
  id: Number,
  name: String,
  short_name: String,
  description: String,
  logo: Media.media,
  tg_url: String,
  vk_url: String,
  type: String, //Тип - отряд, клуб и тд
  main_orgs: { //Глава организации
    type: Array,
    item: MainOrg,
  },
  sub_orgs: {
    type: Array,
    item: SubOrg,
  },
}
// ---------------------------------------------------------------------
// req: post /guard/login
export const User = {
  login: String,
  password: String,
}

// ---------------------------------------------------------------------
// param
export const Feed = {
  type: Object,
  fields: {
    approved: Boolean,
    id: Number,
    title: String,
    description: String,
    media: Media.media,
    updated_at: Date,
    created_at: Date,
    created_by: Number,
    views: Number,
    vk_post_url: String
  }
}

// req get /feed
export const Feeds = {
  feed: {
    type: Array,
    item: Feed,
  }
}

// ---------------------------------------------------------------------
// param
export const Encounter = {
  type: Object,
  fields: {
    club_id: Number,
    count: String,
    description: String,
    id: Number,
  }
}

// req get /feed/encounters/{club_id}
export const Encounters = {
  encounter: {
    type: Array,
    item: Encounter,
  }
}


// ---------------------------------------------------------------------
// 
export const Event = {
  type: Object,
  fields: {
    id: Number,
    title: String,
    description: String,
    media: Media,
    created_by: Number,
    created_at: String,
    date: String,
    feedback_url: String,
    prompt: String,
    reg_open_date: String,
    reg_url: String,
    approved: Boolean,
  }
}

export const Events = {
  event: {
    type: Array,
    item: Event,
  }
}


export const Images = {
  media: {
    type: Array,
    item: {
      type: Object,
      fields: {
        ref_number: Number,
        id: Number,
        name: String,
        key: String,
      }
    },
  }
}
