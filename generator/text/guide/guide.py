import common.helpers as helpers

def generate_json(path):
    titles = helpers.read_file(path)    
    json_data = []

    for i in range(1, len(titles)+1):
        toc = 1 if i < 20 else 2
        title = titles[i-1].replace("\n", "")

        data = {
            "id": i,
            "toc": toc,
            "title": title
        }
        json_data.append(data)

    return json_data
    