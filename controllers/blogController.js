const fs = require('fs');

const blogs = JSON.parse(
  fs.readFileSync(`${__dirname}/../dev-data/data/blog-simple.json`)
);

exports.checkID = (req, res, next, val) => {
  console.log(`This is the ${val}`);

  if (req.params.id * 1 > blogs.length) {
    return res.status(404).json({
      status: 'fail',
      message: 'Invalid ID',
    });
  }
  s;
  next();
};

exports.checkBody = (req, res, next) => {
  if (!req.body.author || !req.body.content) {
    return res.status(400).json({
      status: 'fail',
      data: 'Missing author or content',
    });
  }
  next();
};

exports.getAllBlog = (req, res) => {
  res.status(200).json({
    status: 'success',
    result: blogs.length,
    data: {
      blogs,
    },
  });
};

exports.getBlog = (req, res) => {
  const id = req.params.id * 1;
  const blog = blogs.find((el) => el.id === id);
  if (!blog) {
    return res.status(404).json({
      status: 'fail',
      message: 'Blog not found',
    });
  }

  res.status(200).json({
    status: 'success',
    data: {
      blog,
    },
  });
};

exports.createBlog = (req, res) => {
  const newId = blogs[blogs.length - 1].id + 1;

  const newBlog = Object.assign({ id: newId }, req.body);
  //   const newBlog = { id: newId, ...req.body };

  blogs.push(newBlog);

  fs.writeFile(
    `${__dirname}/../dev-data/data/blog-simple.json`,
    JSON.stringify(blogs),
    (err) => {
      if (err) {
        return res.status(500).json({
          status: 'error',
          message: 'Could not save blog post',
        });
      }
      res.status(201).json({
        status: 'success',
        data: {
          blog: newBlog,
        },
      });
    }
  );
};

exports.updateBlog = (req, res) => {
  res.status(200).json({
    status: 'success',
    data: {
      blog: 'Updated blog post',
    },
  });
};

exports.deleteBlog = (req, res) => {
  res.status(204).json({
    status: 'success',
    data: null,
  });
};
