export const Media = {
  type: Object,
  fields: {
    id: Number,
    key: String,
    name: String,
  }
}

export const User = {
  login: String,
  password: String,
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

export const Clubs = {
  clubs: {
    type: Array,
    item: {
      type: Object,
      fields: {
        id: Number,
        name: String,
        short_name: String,
        description: String,
        logo: Media,
        tg_url: String,
        vk_url: String,
        type: String, //Тип - отряд, клуб и тд
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
      }
    }
  }
}

export const Images = {
  media: {
    type: Array,
    item: Media,
  }
}

