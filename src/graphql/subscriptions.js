/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateCategory = `subscription OnCreateCategory {
  onCreateCategory {
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
export const onUpdateCategory = `subscription OnUpdateCategory {
  onUpdateCategory {
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
export const onDeleteCategory = `subscription OnDeleteCategory {
  onDeleteCategory {
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
export const onCreateKeyword = `subscription OnCreateKeyword {
  onCreateKeyword {
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
export const onUpdateKeyword = `subscription OnUpdateKeyword {
  onUpdateKeyword {
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
export const onDeleteKeyword = `subscription OnDeleteKeyword {
  onDeleteKeyword {
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
export const onCreateThumbnailKeyword = `subscription OnCreateThumbnailKeyword {
  onCreateThumbnailKeyword {
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
export const onUpdateThumbnailKeyword = `subscription OnUpdateThumbnailKeyword {
  onUpdateThumbnailKeyword {
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
export const onDeleteThumbnailKeyword = `subscription OnDeleteThumbnailKeyword {
  onDeleteThumbnailKeyword {
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
export const onCreateDownload = `subscription OnCreateDownload {
  onCreateDownload {
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
export const onUpdateDownload = `subscription OnUpdateDownload {
  onUpdateDownload {
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
export const onDeleteDownload = `subscription OnDeleteDownload {
  onDeleteDownload {
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
export const onCreateImage = `subscription OnCreateImage {
  onCreateImage {
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
export const onUpdateImage = `subscription OnUpdateImage {
  onUpdateImage {
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
export const onDeleteImage = `subscription OnDeleteImage {
  onDeleteImage {
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
export const onCreateFont = `subscription OnCreateFont {
  onCreateFont {
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
export const onUpdateFont = `subscription OnUpdateFont {
  onUpdateFont {
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
export const onDeleteFont = `subscription OnDeleteFont {
  onDeleteFont {
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
export const onCreateThumbnailFont = `subscription OnCreateThumbnailFont {
  onCreateThumbnailFont {
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
export const onUpdateThumbnailFont = `subscription OnUpdateThumbnailFont {
  onUpdateThumbnailFont {
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
export const onDeleteThumbnailFont = `subscription OnDeleteThumbnailFont {
  onDeleteThumbnailFont {
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
export const onCreateThumbnail = `subscription OnCreateThumbnail {
  onCreateThumbnail {
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
export const onUpdateThumbnail = `subscription OnUpdateThumbnail {
  onUpdateThumbnail {
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
export const onDeleteThumbnail = `subscription OnDeleteThumbnail {
  onDeleteThumbnail {
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
