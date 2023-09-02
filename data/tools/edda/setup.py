from distutils.core import setup

setup(
    name='edda',
    version='0.1.0',
    description='Evolutionary Database Design Automator',
    author='Joseph Flinn',
    author_email='joseph.s.flinn@gmail.com',
    #url='https://www.python.org/sigs/distutils-sig/',
    packages=['src'],
    install_requires=[
        'Click',
    ],
    entry_points={
        'console_scripts': [
            'edda = src.edda:cli',
        ],
    },
)
