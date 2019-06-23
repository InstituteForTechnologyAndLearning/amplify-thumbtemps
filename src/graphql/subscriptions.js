// eslint-disable
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
export const onCreateKeywords = `subscription OnCreateKeywords {
  onCreateKeywords {
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
export const onUpdateKeywords = `subscription OnUpdateKeywords {
  onUpdateKeywords {
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
export const onDeleteKeywords = `subscription OnDeleteKeywords {
  onDeleteKeywords {
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
export const onUpdateFont = `subscription OnUpdateFont {
  onUpdateFont {
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
export const onDeleteFont = `subscription OnDeleteFont {
  onDeleteFont {
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
