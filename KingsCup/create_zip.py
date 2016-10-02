import os
import zipfile

path = ["AlexaSkill.js", "index.js"]

zf = zipfile.ZipFile("src.zip", "w")

for dirname, subdirs, files in os.walk(path):
	zf.write(dirname)
	for filename in files:
		zf.write(os.path.join(dirname, filename))
zf.close()