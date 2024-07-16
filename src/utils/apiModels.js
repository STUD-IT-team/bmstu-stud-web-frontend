
// ----------------------------------------------------------------------
// import { apply } from "file-loader"

// req: get /club/media/{club_id}
export const Media = {
  media: {
    type: Object,
    fields: {
      id: Number,
      key: String,
      name: String,
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

// ----------------------------------------------------------------------
// params
export const MainOrg = {
  type: Object,
  fields: {
    id: Number,
    image: Media, // Фото человека
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
    image: Media, // Фото человека
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
  logo: Media,
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
    media: Media,
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
  encounters: {
    type: Array,
    item: Encounter,
  }
}


// ---------------------------------------------------------------------
// req: get /events/
export const Event = {
  type: Object,
  fields: {
    id: Number,
    title: String,
    prompt: String,
    description: String,
    media: Media,
    approved: Boolean,
    created_at: String,
    created_by: Number,
    date: String,
    feedback_url: String,
    reg_open_date: String,
    reg_url: String,
  }
}

export const Events = {
  event: {
    type: Array,
    item: {
      type: Object,
      fields: {
        approved: Boolean,
        created_at: String,
        created_by: Number,
        date: String,
        description: String,
        feedback_url: String,
        id: Number,
        media: Media,
        prompt: String,
        reg_open_date: String,
        reg_url: String,
        title: String,
      }
    }
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


export const Images = {
  media: {
    type: Array,
    item: Media,
  }
}

