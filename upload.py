from flask import Flask, render_template, request
from werkzeug import secure_filename
app = Flask(__main__)

@app.route('/upload_file')
def upload():
   return render_template('upload.html')
	
@app.route('/upload_file', methods = ['GET', 'POST'])
def uploader():
  app.config['UPLOAD_FOLDER'] = 'Videos/'
   if request.method == 'POST':
      f = request.files['file']
      f.save(secure_filename(f.filename))
      return 'file uploaded successfully'
		
if __name__ == '__main__':
   app.run(debug = True)
