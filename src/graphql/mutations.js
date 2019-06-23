// eslint-disable
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
export const createKeywords = `mutation CreateKeywords($input: CreateKeywordsInput!) {
  createKeywords(input: $input) {
    id
    thumbnails {
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
    name
    owner
  }
}
`;
export const updateKeywords = `mutation UpdateKeywords($input: UpdateKeywordsInput!) {
  updateKeywords(input: $input) {
    id
    thumbnails {
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
    name
    owner
  }
}
`;
export const deleteKeywords = `mutation DeleteKeywords($input: DeleteKeywordsInput!) {
  deleteKeywords(input: $input) {
    id
    thumbnails {
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
    name
    owner
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
    name
    source
    owner
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
        name
        owner
      }
      nextToken
    }
    fonts {
      items {
        id
        name
        source
        owner
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
        name
        owner
      }
      nextToken
    }
    fonts {
      items {
        id
        name
        source
        owner
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
        name
        owner
      }
      nextToken
    }
    fonts {
      items {
        id
        name
        source
        owner
      }
      nextToken
    }
    deletedAt
    owner
  }
}
`;
