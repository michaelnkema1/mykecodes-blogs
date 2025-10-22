# Contributing to MykeCodes Blog Website

Thank you for your interest in contributing to this project! This document provides guidelines and information for contributors.

## 🚀 Getting Started

1. **Fork the repository** on GitHub
2. **Clone your fork** locally:
   ```bash
   git clone https://github.com/yourusername/Blog-Engine.git
   cd Blog-Engine
   ```
3. **Set up the development environment**:
   ```bash
   chmod +x start.sh
   ./start.sh
   ```

## 🛠️ Development Setup

### Prerequisites
- Python 3.8+
- Node.js 16+
- Git

### Backend Development
```bash
# Create virtual environment
python3 -m venv venv
source venv/bin/activate

# Install dependencies
pip install -r requirements.txt

# Run migrations
python manage.py makemigrations
python manage.py migrate

# Start development server
python manage.py runserver 8001
```

### Frontend Development
```bash
cd frontend
npm install
npm start
```

## 📝 How to Contribute

### 1. Choose an Issue
- Look for issues labeled `good first issue` or `help wanted`
- Comment on the issue to let others know you're working on it
- If you want to work on something not listed, open a new issue first

### 2. Create a Branch
```bash
git checkout -b feature/your-feature-name
# or
git checkout -b bugfix/issue-description
```

### 3. Make Your Changes
- Write clean, readable code
- Follow existing code style
- Add comments for complex logic
- Update documentation if needed

### 4. Test Your Changes
- Test the backend API endpoints
- Test the frontend functionality
- Ensure no breaking changes

### 5. Commit Your Changes
```bash
git add .
git commit -m "Add: brief description of your changes"
```

Use conventional commit messages:
- `Add:` for new features
- `Fix:` for bug fixes
- `Update:` for improvements
- `Remove:` for deletions
- `Docs:` for documentation changes

### 6. Push and Create Pull Request
```bash
git push origin feature/your-feature-name
```

Then create a Pull Request on GitHub.

## 📋 Code Style Guidelines

### Python/Django
- Follow PEP 8 style guide
- Use meaningful variable and function names
- Add docstrings for functions and classes
- Keep functions small and focused

### JavaScript/React
- Use meaningful component and variable names
- Follow React best practices
- Use functional components with hooks
- Keep components small and focused

### General
- Write clear, descriptive commit messages
- Update README.md if you add new features
- Add comments for complex logic
- Test your changes thoroughly

## 🐛 Reporting Bugs

When reporting bugs, please include:

1. **Description**: Clear description of the bug
2. **Steps to Reproduce**: Step-by-step instructions
3. **Expected Behavior**: What should happen
4. **Actual Behavior**: What actually happens
5. **Environment**: OS, Python version, Node.js version
6. **Screenshots**: If applicable

## 💡 Suggesting Features

When suggesting features, please include:

1. **Description**: Clear description of the feature
2. **Use Case**: Why would this be useful?
3. **Implementation Ideas**: Any thoughts on how to implement
4. **Alternatives**: Other solutions you've considered

## 🔍 Code Review Process

1. **Automated Checks**: All PRs must pass automated checks
2. **Code Review**: At least one maintainer will review your code
3. **Testing**: Ensure all tests pass
4. **Documentation**: Update docs if needed

## 📚 Resources

- [Django Documentation](https://docs.djangoproject.com/)
- [Django REST Framework](https://www.django-rest-framework.org/)
- [React Documentation](https://reactjs.org/docs/)
- [Material-UI Documentation](https://mui.com/)

## 🤝 Community Guidelines

- Be respectful and inclusive
- Help others learn and grow
- Provide constructive feedback
- Follow the code of conduct

## 📞 Getting Help

- Open an issue for questions
- Join our community discussions
- Check existing documentation
- Ask in pull request comments

## 🎉 Recognition

Contributors will be recognized in:
- README.md contributors section
- Release notes
- Project documentation

Thank you for contributing to MykeCodes Blog Website! 🚀
