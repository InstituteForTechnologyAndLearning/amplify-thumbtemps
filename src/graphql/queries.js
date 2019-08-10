/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getCategory = `query GetCategory($id: ID!) {
  getCategory(id: $id) {
    id
    thumbnails {
      items {
        id
        title
        slug
        description
        releaseDate
        deletedAt
        owner
      }
      nextToken
    }
    name
    owner
  }
}
`;
export const listCategorys = `query ListCategorys(
  $filter: ModelCategoryFilterInput
  $limit: Int
  $nextToken: String
) {
  listCategorys(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
      id
      thumbnails {
        nextToken
      }
      name
      owner
    }
    nextToken
  }
}
`;
export const getKeyword = `query GetKeyword($id: ID!) {
  getKeyword(id: $id) {
    id
    thumbnails {
      items {
        id
      }
      nextToken
    }
    name
    owner
  }
}
`;
export const listKeywords = `query ListKeywords(
  $filter: ModelKeywordFilterInput
  $limit: Int
  $nextToken: String
) {
  listKeywords(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
      id
      thumbnails {
        nextToken
      }
      name
      owner
    }
    nextToken
  }
}
`;
export const getDownload = `query GetDownload($id: ID!) {
  getDownload(id: $id) {
    id
    thumbnail {
      id
      title
      slug
      description
      releaseDate
      download {
        id
        source
        fileSize
        downloadType
        owner
      }
      images {
        nextToken
      }
      category {
        id
        name
        owner
      }
      keywords {
        nextToken
      }
      fonts {
        nextToken
      }
      deletedAt
      owner
    }
    source
    fileSize
    downloadType
    owner
  }
}
`;
export const listDownloads = `query ListDownloads(
  $filter: ModelDownloadFilterInput
  $limit: Int
  $nextToken: String
) {
  listDownloads(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
      id
      thumbnail {
        id
        title
        slug
        description
        releaseDate
        deletedAt
        owner
      }
      source
      fileSize
      downloadType
      owner
    }
    nextToken
  }
}
`;
export const getImage = `query GetImage($id: ID!) {
  getImage(id: $id) {
    id
    thumbnail {
      id
      title
      slug
      description
      releaseDate
      download {
        id
        source
        fileSize
        downloadType
        owner
      }
      images {
        nextToken
      }
      category {
        id
        name
        owner
      }
      keywords {
        nextToken
      }
      fonts {
        nextToken
      }
      deletedAt
      owner
    }
    title
    publisher
    source
    order
    owner
  }
}
`;
export const listImages = `query ListImages(
  $filter: ModelImageFilterInput
  $limit: Int
  $nextToken: String
) {
  listImages(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
      id
      thumbnail {
        id
        title
        slug
        description
        releaseDate
        deletedAt
        owner
      }
      title
      publisher
      source
      order
      owner
    }
    nextToken
  }
}
`;
export const getFont = `query GetFont($id: ID!) {
  getFont(id: $id) {
    id
    thumbnails {
      items {
        id
      }
      nextToken
    }
    name
    source
    owner
  }
}
`;
export const listFonts = `query ListFonts(
  $filter: ModelFontFilterInput
  $limit: Int
  $nextToken: String
) {
  listFonts(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
      id
      thumbnails {
        nextToken
      }
      name
      source
      owner
    }
    nextToken
  }
}
`;
export const getThumbnail = `query GetThumbnail($id: ID!) {
  getThumbnail(id: $id) {
    id
    title
    slug
    description
    releaseDate
    download {
      id
      thumbnail {
        id
        title
        slug
        description
        releaseDate
        deletedAt
        owner
      }
      source
      fileSize
      downloadType
      owner
    }
    images {
      items {
        id
        title
        publisher
        source
        order
        owner
      }
      nextToken
    }
    category {
      id
      thumbnails {
        nextToken
      }
      name
      owner
    }
    keywords {
      items {
        id
      }
      nextToken
    }
    fonts {
      items {
        id
      }
      nextToken
    }
    deletedAt
    owner
  }
}
`;
export const listThumbnails = `query ListThumbnails(
  $filter: ModelThumbnailFilterInput
  $limit: Int
  $nextToken: String
) {
  listThumbnails(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
      id
      title
      slug
      description
      releaseDate
      download {
        id
        source
        fileSize
        downloadType
        owner
      }
      images {
        nextToken
      }
      category {
        id
        name
        owner
      }
      keywords {
        nextToken
      }
      fonts {
        nextToken
      }
      deletedAt
      owner
    }
    nextToken
  }
}
`;
export const thumbnailsBySlug = `query ThumbnailsBySlug(
  $slug: String
  $releaseDate: ModelStringKeyConditionInput
  $filter: ModelThumbnailFilterInput
  $limit: Int
  $nextToken: String
) {
  thumbnailsBySlug(
    slug: $slug
    releaseDate: $releaseDate
    filter: $filter
    limit: $limit
    nextToken: $nextToken
  ) {
    items {
      id
      title
      slug
      description
      releaseDate
      download {
        id
        source
        fileSize
        downloadType
        owner
      }
      images {
        nextToken
      }
      category {
        id
        name
        owner
      }
      keywords {
        nextToken
      }
      fonts {
        nextToken
      }
      deletedAt
      owner
    }
    nextToken
  }
}
`;
