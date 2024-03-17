import spacy

nlp = spacy.load('en_core_web_sm')

def extract_information(paragraph: str) -> list[tuple[str, str]]:
    doc = nlp(paragraph)
    entities = [(ent.text, ent.label_) for ent in doc.ents]
    return entities