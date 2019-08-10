/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createCategory = `mutation CreateCategory($input: CreateCategoryInput!) {
  createCategory(input: $input) {
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
export const updateCategory = `mutation UpdateCategory($input: UpdateCategoryInput!) {
  updateCategory(input: $input) {
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
export const deleteCategory = `mutation DeleteCategory($input: DeleteCategoryInput!) {
  deleteCategory(input: $input) {
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
export const createKeyword = `mutation CreateKeyword($input: CreateKeywordInput!) {
  createKeyword(input: $input) {
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
export const updateKeyword = `mutation UpdateKeyword($input: UpdateKeywordInput!) {
  updateKeyword(input: $input) {
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
export const deleteKeyword = `mutation DeleteKeyword($input: DeleteKeywordInput!) {
  deleteKeyword(input: $input) {
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
export const createThumbnailKeyword = `mutation CreateThumbnailKeyword($input: CreateThumbnailKeywordInput!) {
  createThumbnailKeyword(input: $input) {
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
    keyword {
      id
      thumbnails {
        nextToken
      }
      name
      owner
    }
  }
}
`;
export const updateThumbnailKeyword = `mutation UpdateThumbnailKeyword($input: UpdateThumbnailKeywordInput!) {
  updateThumbnailKeyword(input: $input) {
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
    keyword {
      id
      thumbnails {
        nextToken
      }
      name
      owner
    }
  }
}
`;
export const deleteThumbnailKeyword = `mutation DeleteThumbnailKeyword($input: DeleteThumbnailKeywordInput!) {
  deleteThumbnailKeyword(input: $input) {
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
    keyword {
      id
      thumbnails {
        nextToken
      }
      name
      owner
    }
  }
}
`;
export const createDownload = `mutation CreateDownload($input: CreateDownloadInput!) {
  createDownload(input: $input) {
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
export const updateDownload = `mutation UpdateDownload($input: UpdateDownloadInput!) {
  updateDownload(input: $input) {
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
export const deleteDownload = `mutation DeleteDownload($input: DeleteDownloadInput!) {
  deleteDownload(input: $input) {
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
export const createImage = `mutation CreateImage($input: CreateImageInput!) {
  createImage(input: $input) {
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
export const updateImage = `mutation UpdateImage($input: UpdateImageInput!) {
  updateImage(input: $input) {
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
export const deleteImage = `mutation DeleteImage($input: DeleteImageInput!) {
  deleteImage(input: $input) {
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
export const createFont = `mutation CreateFont($input: CreateFontInput!) {
  createFont(input: $input) {
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
export const updateFont = `mutation UpdateFont($input: UpdateFontInput!) {
  updateFont(input: $input) {
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
export const deleteFont = `mutation DeleteFont($input: DeleteFontInput!) {
  deleteFont(input: $input) {
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
export const createThumbnailFont = `mutation CreateThumbnailFont($input: CreateThumbnailFontInput!) {
  createThumbnailFont(input: $input) {
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
    font {
      id
      thumbnails {
        nextToken
      }
      name
      source
      owner
    }
  }
}
`;
export const updateThumbnailFont = `mutation UpdateThumbnailFont($input: UpdateThumbnailFontInput!) {
  updateThumbnailFont(input: $input) {
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
    font {
      id
      thumbnails {
        nextToken
      }
      name
      source
      owner
    }
  }
}
`;
export const deleteThumbnailFont = `mutation DeleteThumbnailFont($input: DeleteThumbnailFontInput!) {
  deleteThumbnailFont(input: $input) {
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
    font {
      id
      thumbnails {
        nextToken
      }
      name
      source
      owner
    }
  }
}
`;
export const createThumbnail = `mutation CreateThumbnail($input: CreateThumbnailInput!) {
  createThumbnail(input: $input) {
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
export const updateThumbnail = `mutation UpdateThumbnail($input: UpdateThumbnailInput!) {
  updateThumbnail(input: $input) {
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
export const deleteThumbnail = `mutation DeleteThumbnail($input: DeleteThumbnailInput!) {
  deleteThumbnail(input: $input) {
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
