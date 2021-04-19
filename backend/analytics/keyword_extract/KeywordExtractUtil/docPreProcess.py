def docTokenization(documentFileName):
    '''
        Sentence Tokenization method
        Override if needed
    '''
    review_documents_tokenized = []
    with open(documentFileName, 'r', encoding='UTF-8') as document:
        for review in document:
            tokenized_line = review.lower().split()
            review_documents_tokenized.append(tokenized_line)
    return review_documents_tokenized

