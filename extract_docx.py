import zipfile
import xml.etree.ElementTree as ET
import sys
import os

def extract_text(docx_path):
    try:
        with zipfile.ZipFile(docx_path) as z:
            xml_content = z.read('word/document.xml')
        
        tree = ET.fromstring(xml_content)
        namespace = {'w': 'http://schemas.openxmlformats.org/wordprocessingml/2006/main'}
        
        paragraphs = []
        for p in tree.findall('.//w:p', namespace):
            texts = [t.text for t in p.findall('.//w:t', namespace) if t.text]
            if texts:
                paragraphs.append(''.join(texts))
        
        return '\n'.join(paragraphs)
    except Exception as e:
        return f"Error extracting {docx_path}: {e}"

if __name__ == "__main__":
    files = [
        "spec/PAGE ACCEUIL-NOVISA.docx",
        "spec/RÉSUMÉ GLOBAL.docx",
        "spec/PAGE COACHING CANDIDATS.docx",
        "spec/PAGE PORTAGE SALARIAL.docx",
        "spec/PAGE RECRUTEMENT TALENTS FULL REMOTE.docx",
        "spec/PAGE VISAS PROFESSIONNELS.docx",
        "spec/EXTERNALISATION PAIE.docx"
    ]
    
    output_dir = "spec/extracted_text"
    os.makedirs(output_dir, exist_ok=True)
    
    for f in files:
        print(f"Extracting {f}...")
        text = extract_text(f)
        base_name = os.path.basename(f).replace(".docx", ".txt")
        with open(os.path.join(output_dir, base_name), "w") as out:
            out.write(text)
        print(f"Saved to {os.path.join(output_dir, base_name)}")
